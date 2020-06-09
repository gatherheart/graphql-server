import multer from "multer";
import multerS3 from "multer-s3"
import aws from "aws-sdk"

const s3 = new aws.S3({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_PRIVATE_KEY,
    region: "ap-northeast-2"
});

const upload = multer({
    limits: { fieldSize: 2 * 1024 * 1024 },
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "milkybean",
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            console.log(file);
            cb(null, Date.now().toString() + "." + file.originalname.split('.').pop());
        }
    })
});
export const uploadMiddleware = upload.array("file");

export const uploadController = (req, res) => {
    const { files } = req;
    console.log(files);
    res.json({ files });
};  