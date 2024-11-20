import { Schema, model } from "mongoose";

interface IAnswer{
    QuestionnaireId:Schema.Types.ObjectId | string;
    QuestionId: Schema.Types.ObjectId | string;
    answer:string

}

const AnswerSchema = new Schema <IAnswer>({
    QuestionnaireId: {
        type: Schema.Types.ObjectId,
        ref:"questionaires",
        required:true
    },
    QuestionId:{
        type: Schema.Types.ObjectId
    },
    answer: {
        type:String,
        required:true
    }
});
export const AnswerModel =model("answers", AnswerSchema);