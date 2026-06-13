import { defineConfig, devices } from "@playwright/test";
import { OrtoniReportConfig } from "ortoni-report";
import { join } from "path";

const reportConfig: OrtoniReportConfig = {
    open: process.env.CI ? "never" : "on-failure",
    folderPath: join("reports", "ui", "ortoni-report"),
    filename: "index.html",
    title: "Playwright Test Result",
    projectName: "Playwright Test",
    testType: "Regression",
    authorName: "Mohammad Sadab Saqib",
    base64Image: true,
    stdIO: true,
    meta: {
        project: "Playwright Test For Web",
        version: "26.0.0",
        release: "Release.2026",
        platform: process.platform,
    }
};

export default defineConfig({
    testDir: "./specs",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ["ortoni-report", reportConfig],
        ["html", { outputFolder: join(process.cwd(), "reports", "ui", "playwright-report"), open: process.env.CI ? "never" : "never" }],
    ],
    use: {
        trace: "on-first-retry",
        screenshot: "only-on-failure"
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        }
    ]
});
