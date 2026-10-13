import type { Models } from "appwrite";

export interface Information extends Models.Document {
    title: string,
    bio: string,
    email: string,
}

export interface Exhibition extends Models.Document {
    name: string,
    year: number,
    venue: string,
    type: ExhibitionType,
    city: string,
    note?: string,
}

export interface WorksInformation extends Models.Document {
    text: string,
}

type ExhibitionType = "solo" | "group" | "duo";