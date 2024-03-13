
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const app = express()
app.use(express.json())


class SurveyModel{
    static async createSurvey (data) {
        return await prisma.survey.create({
            data: { title:data.title,
                        questions:{
                            create: data.questions.map(question => ({
                                text: question.text,
                                options: {
                                    create: question.options.map(option => ({
                                        text: option.text
                                    }))
                                }
                            }))
                        }
                 },select:
                 {
                    title:true,
                    questions:{ 
                        
                        select:{
                            text:true,
                            options:true
                        }
                    },
                
                    
                 }
                    })
                    
     

    }
    static async getAllSurveys() {
        return await prisma.survey.findMany({
            include:{
               
                questions:true
            }
        });
      }
      static async getSurveyById(id) {
        return await prisma.survey.findUnique({ where: { 
            id:parseInt(id)
         } ,include:{
            questions:true
         }});
         
      } 
      static async updateSurvey(id, data) {
        //so options should updated on option model right?
        return await prisma.survey.update({ where: { id:parseInt(id) }, 
        data: { title:data.title}
            // questions:{
                //We use the upsert option for the questions field. This allows us to update existing questions if their id is provided, and create new questions otherwise.
// Inside the upsert array, we specify the update and create options for each question. This ensures that existing questions are updated with new text if provided, and new questions are created if no id is provided.
            //     upsert: data.questions.map(question => ({
            //         where: { id: question.id || undefined,surzzzzzzz },
            //         update: { text: question.text },
            //         create: { text: question.text }
            //     }))
            // }
     });
    }
    static async deleteOption(id){
      return await prisma.option.deleteMany({
          where:{
              questionId:parseInt(id)
          }
      })
    }
      static async deleteQuestion(id){
        return await prisma.question.delete({
            where:{
                surveyId:parseInt(id)
            }
        })
      }
      static async deleteSurvey(id){
        return await prisma.survey.delete({where:{id:parseInt(id)}})
      }
}

module.exports = {
    SurveyModel,
    

}
