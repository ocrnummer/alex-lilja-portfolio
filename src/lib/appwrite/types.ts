import type { Models } from "appwrite";
import type { Information, Exhibition, WorksInformation } from "../../types";

/**
 * Collection types
 */

export type InformationCollection = {
    get: (id: string) => Promise<Information>;
    list: (queries?: string[]) => Promise<Models.DocumentList<Information>>;
}

export type ExhibitionsCollection = {
    get: (id: string) => Promise<Exhibition>;
    list: (queries?: string[]) => Promise<Models.DocumentList<Exhibition>>;
}

export type WorksInformationCollection = {
    get: (id: string) => Promise<WorksInformation>;
    list: (queries?: string[]) => Promise<Models.DocumentList<WorksInformation>>;
}

/**
 * Database type
 */

export type Database = {
    information: InformationCollection,
    exhibitions: ExhibitionsCollection,
    worksInformation: WorksInformationCollection
}