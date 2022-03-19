import * as dotenv from 'dotenv';
class Locals {
  public static getEnvVariables(): dotenv.DotenvConfigOutput {
    let parsedEnv: dotenv.DotenvConfigOutput;
    if (process.env.NODE_ENV === 'development') {
      parsedEnv = dotenv.config({ path: '.env.development', debug: true });
    } else {
      parsedEnv = dotenv.config();
    }

    return parsedEnv;
  }
}

export default Locals;
