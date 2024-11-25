import {Schema} from "mongoose";

 export interface IUser {
    name: string;
    email: string;
    lastNames: string;
    password: string;
    rol: "administrator" | "client";
}

export interface IAnswer{
    qstId:Schema.Types.ObjectId | string;
    qId:Schema.Types.ObjectId | string;
    answer:string;
}

export interface IOption {
    title: string;
    qId:Schema.Types.ObjectId | string;
}

export interface IQuestion {
    title: String;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    qId: Schema.Types.ObjectId | string;
}

export interface IQuestionnaire{
    title: string;
    description: string;
    uId: Schema.Types.ObjectId | string;
}