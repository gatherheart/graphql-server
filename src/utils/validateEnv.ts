import { cleanEnv, str, port } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_USER: str(),
    MONGO_PATH: str(),
    MONGO_PASSWORD: str(),
    PORT: port(),
  });
}

export default validateEnv;
