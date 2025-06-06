import multer from "multer";
import { tmpdir } from "node:os";

// Confing

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tempDir = tmpdir();

    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
