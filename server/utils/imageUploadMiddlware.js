const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'dg8pkepjq',
    api_key: '611922743427242',
    api_secret: 'DWI8K8M08qTS4nFLTE-knaYrYrM'
});


const storage = multer.memoryStorage();
const upload = multer({ storage });

const imageUploadMiddleware = async (req, res, next) => {
    try{
        const file = req.file;
        if (!file) {
            return next();
        }
        cloudinary.uploader.upload_stream({ transformation: { width: 1000 } }, (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'Image upload failed.' });
            }
            req.body.imageUrl = result.secure_url;
            next()
        }).end(file.buffer);
    }
    catch(error){
        return res.status(500).json({ message: 'Image upload failed.' });
    }
};

// Export a single middleware combining both multer and Cloudinary
const imageUploadMiddlware = [
    upload.single('file'), // Handle file upload with multer
    imageUploadMiddleware // Handle Cloudinary upload
];

module.exports = imageUploadMiddlware;