import {Schema, model} from "mongoose";

interface IOptions { 
    QuestionId:Schema.Types.ObjectId | string; 
    title: string;
}

const OptionsSchema = new Schema <IOptions> ({ 
    QuestionId:{
        type: Schema.Types.ObjectId,
        ref:"questions",
        required: true
    },
    title:{
        type: String,
        required: true
    },
})

export const OptionModel = model ("options", OptionsSchema)