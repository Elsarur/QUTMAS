import {Schema, model} from "mongoose";

interface IQuestion {
    title: String;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    QuestionnaireId: Schema.Types.ObjectId | string;
}
const QuestionSchema = new Schema<IQuestion>({
    title:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: [ "radio", "checkbox", "select", "text"],
        required: true
    },
    isMandatory:{
        type: Boolean,
        required:true
    },
    QuestionnaireId: {
        type: Schema.Types.ObjectId,
        ref:"questionaires",
        required:true
    }
})

export const QuestionsModel = model ("questions", QuestionSchema)