import {Schema, model} from "mongoose";

interface IOptions { 
    qId:Schema.Types.ObjectId | string; 
    title: string;
}

const OptionsSchema = new Schema <IOptions> ({ 
    qId:{
        type: Schema.Types. ObjectId,
        ref:"questions"
    },
    title:{
        type: String,
        required: true
    },
})

export const OptionModel = model ("options", OptionsSchema)