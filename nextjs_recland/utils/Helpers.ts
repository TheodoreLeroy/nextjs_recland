import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
console.log(projectDir);
loadEnvConfig(projectDir);

/**
 * Resolves the public base URL of the application.
 * @returns The configured public app URL or the local development URL.
 */
export const getBaseUrl = () => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    return appUrl ? appUrl : "http//localhost:3000";
};
