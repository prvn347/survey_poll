const z = require('zod')

const userSchema =   z.object({
email: z.string().email(),
password:z.string().min(8),
name:z.string().optional()

})

const SurveyOptionSchema = z.object({
    id: z.number(),
    text: z.string(),
});

const SurveyQuestionSchema = z.object({
    id: z.number(),
    text: z.string(),
    options: z.array(SurveyOptionSchema),
});

const SurveyDataSchema = z.object({
    title: z.string(),
    questions: z.array(SurveyQuestionSchema),
});

module.exports ={
    userSchema,
    SurveyDataSchema
}