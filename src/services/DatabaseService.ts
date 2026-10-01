// import { databases } from "../lib/appwrite/config.ts";
// import type { Database } from "../lib/appwrite/types.ts";

// const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
// const COLLECTION_ID_INFORMATION = import.meta.env.VITE_APPWRITE_COLLECTION_ID_INFORMATION
// const COLLECTION_ID_EXHIBITIONS = import.meta.env.VITE_APPWRITE_COLLECTION_ID_EXHIBITIONS
// const COLLECTION_ID_WORKS_INFORMATION = import.meta.env.VITE_APPWRITE_COLLECTION_ID_WORKS_INFORMATION

// const db: Database = {
//     information: {
//         get: async (id) => databases.getDocument(DATABASE_ID, COLLECTION_ID_INFORMATION, id),
//         list: async (queries = []) =>
//             databases.listDocuments(
//                 DATABASE_ID, 
//                 COLLECTION_ID_INFORMATION, 
//                 queries
//             ),
//     },
//     exhibitions: {
//         get: async (id) => databases.getDocument(DATABASE_ID, COLLECTION_ID_EXHIBITIONS, id),
//         list: async (queries = []) =>
//             databases.listDocuments(
//                 DATABASE_ID, 
//                 COLLECTION_ID_EXHIBITIONS, 
//                 queries
//             ),
//     },
//     worksInformation: {
//         get: async (id) => databases.getDocument(DATABASE_ID, COLLECTION_ID_WORKS_INFORMATION, id),
//         list: async (queries = []) =>
//             databases.listDocuments(
//                 DATABASE_ID, 
//                 COLLECTION_ID_WORKS_INFORMATION, 
//                 queries
//             ),
//     }
// };

// export default db;