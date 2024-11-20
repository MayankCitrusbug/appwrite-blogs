import config from "../config/config";
import { Client, ID, Storage } from 'appwrite'

export class FileService {
    client = new Client();
    storage;    // bucket

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.storage = new Storage(this.client)
    }

    async uploadFile( file ) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile( fileId ) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview( fileId ) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
            return false;
        }
    }
}

const fileService = new FileService();

export default fileService;