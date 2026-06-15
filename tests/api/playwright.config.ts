import { defineConfig } from "@playwright/test";
import { join } from "path";


export default defineConfig({
    testDir: "./specs",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ["html", { outputFolder: join(process.cwd(), "reports", "api", "playwright-report"), open: process.env.CI ? "never" : "on-failure" }],
    ],
    use: {
        trace: "on-first-retry",
        navigationTimeout: 40_0000
    },
    projects: [
        {
            name: "restApi",
            testDir: "./specs/rest"
        },
        {
            name: "graphqlApi",
            testDir: "./specs/graphql"
        }
    ]
});
