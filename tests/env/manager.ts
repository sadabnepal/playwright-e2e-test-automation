import { config } from "dotenv";
import { join } from "path";

config({ path: join(process.cwd(), ".env") });

export const localEnv = {
    USERNAME: process.env.USERNAME as string,
    PASSWORD: process.env.PASSWORD as string
};


config({ path: join(process.cwd(), "tests", "env", `${process.env.ENV || "dev"}.env`) });

export const env = {
    APP_URL: process.env.APP_URL as string,
    REST_URL: process.env.REST_URL as string,
    GRAPHQL_URL: process.env.GRAPHQL_URL as string
};