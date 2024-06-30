import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: 'cloud',
    api_key: config,
    api_secret: config,

})


const uploadOncloudinary = async(localPath) =>{
    try {
        if (!localPath) {
            return null;
        }

        const responseFile = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto",
        });

        fs.unlinkSync(localPath);
        return responseFile;

    } catch (error) {
        fs.unlinkSync(localPath);
        return null;
    }
}

export default uploadOncloudinary