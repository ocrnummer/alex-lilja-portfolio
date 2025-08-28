import type { Models } from "appwrite";

export interface IInformation extends Models.Document {
    title: string,
    bio: string,
    email: string,
}

export interface IExhibition extends Models.Document {
    name: string,
    year: number,
    venue: string,
    type: ExhibitionType,
    city: string,
}

type ExhibitionType = "solo" | "group" | "duo";