import App from './app';
import loggerMiddleware from './middleware/logger';
import schema from './schema';
import 'dotenv/config';
import { uploadMiddleware, uploadController } from "./utils/upload";

//validateEnv();

const PORT = process.env.PORT || 4000;

const app = new App(
  { schema },
  {
    port: parseInt(process.env.PORT) || 80,
    controllers: [],
    middleWares: [loggerMiddleware],
  },
);

// REST 
app.express.post("/api/upload", uploadMiddleware, uploadController);
app.listen();
