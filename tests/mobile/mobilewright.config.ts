import { defineConfig } from "mobilewright";
import { join } from "path";

export default defineConfig({
    testDir: join(process.cwd(), "tests", "mobile", "specs"),
    reporter: [
        ["html", { outputFolder: join(process.cwd(), "reports", "mobile", "playwright-report"), open: process.env.CI ? "never" : "on-failure" }],
    ],
    viewTree: "on-failure",
    projects: [
        {
            name: "ios",
            timeout: 60_0000,
            use: {
                platform: "ios",
                bundleId: "com.saucelabs.mydemo.app.ios",
                deviceName: /iPhone 17/,
                installApps: join(process.cwd(), "apps", "ios", "app.zip"),
            }
        },
        {
            name: "android",
            timeout: 60_000,
            use: {
                platform: "android",
                bundleId: "com.saucelabs.mydemo.app.ios",
                deviceName: /Pixel 7/,
                installApps: join(process.cwd(), "apps", "android", "app.apk")
            }
        }
    ]
});
