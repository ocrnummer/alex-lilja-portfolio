import type { Models } from "appwrite";
import type { IInformation, IExhibition } from "../../types";

/**
 * Payload types
 */

export type AdPayload = {
    title: string,
    body: string,
}

/**
 * Collection types
 */

export type InformationCollection = {
    get: (id: string) => Promise<IInformation>;
    list: (queries?: string[]) => Promise<Models.DocumentList<IInformation>>;
}

export type ExhibitionsCollectionn = {
    get: (id: string) => Promise<IExhibition>;
    list: (queries?: string[]) => Promise<Models.DocumentList<IExhibition>>;
}

/**
 * Database type
 */

export type Database = {
    information: InformationCollection,
    exhibitions: ExhibitionsCollectionn
}