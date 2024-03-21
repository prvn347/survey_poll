const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
app.use(express.json());

class SurveyModel {
  static async createSurvey(data, userId) {
    console.log(userId);
    return await prisma.survey.create({
      data: {
        title: data.title,
        userId: parseInt(userId),
        questions: {
          create: data.questions.map((question) => ({
            text: question.text,
            options: {
              create: question.options.map((option) => ({
                text: option.text,
              })),
            },
          })),
        },
      },
      select: {
        title: true,
        questions: {
          select: {
            text: true,
            options: true,
          },
        },
      },
    });
  }

  static async getAllSurveys() {
    return await prisma.survey.findMany({
      include: {
        questions: true,
        User: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  static async getSurveyById(id) {
    return await prisma.survey.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        questions: {
          select: {
            id: true,
            text: true,
            options: true,
          },
        },
      },
    });
  }
  static async updateSurvey(id, data) {
    return await prisma.survey.update({
      where: { id: parseInt(id) },
      data: { title: data.title },
    });
  }
  static async deleteOption(id) {
    return await prisma.option.deleteMany({
      where: {
        questionId: parseInt(id),
      },
    });
  }
  static async deleteQuestion(id) {
    return await prisma.question.delete({
      where: {
        surveyId: parseInt(id),
      },
    });
  }
  static async deleteSurvey(id) {
    return await prisma.survey.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = {
  SurveyModel,
};
