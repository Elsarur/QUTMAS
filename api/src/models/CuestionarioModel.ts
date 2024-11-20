import {Schema, model} from "mongoose";

interface IQuestionnaires{
    title: string;
    uId: Schema.Types.ObjectId | string;
    descriptions: string;
}

const QuestionnairesSchema = new Schema <IQuestionnaires>({
    title:{
        type: String,
        required: true
    },
    uId:{
        type: Schema.Types. ObjectId,
        ref:"users"
    },
    descriptions:{
        type: String,
        required: true
    },
})

export const QuestionnairesModel = model ("questionnaires", QuestionnairesSchema);