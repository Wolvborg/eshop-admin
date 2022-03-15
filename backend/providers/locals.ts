import * as dotenv from 'dotenv';
dotenv.config();

class Locals {
  public static getEnvVariables(): Record<string, string> {
    return {
      API_PREFIX: process.env.API_PREFIX || 'api',
    };
  }
}

export default Locals;
