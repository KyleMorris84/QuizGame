import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const isVercel = !!env.VERCEL; // Check if running in Vercel
const baseFolder = env.APPDATA ? `${env.APPDATA}/ASP.NET/https` : `${env.HOME}/.aspnet/https`;

const certificateName = "reactapp1.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// Only try to create a certificate if NOT on Vercel
if (!isVercel) {
    if (!fs.existsSync(baseFolder)) {
        fs.mkdirSync(baseFolder, { recursive: true });
    }

    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        if (0 !== child_process.spawnSync('dotnet', [
            'dev-certs',
            'https',
            '--export-path',
            certFilePath,
            '--format',
            'Pem',
            '--no-password',
        ], { stdio: 'inherit' }).status) {
            throw new Error("Could not create certificate.");
        }
    }
    const target = env.ASPNETCORE_HTTPS_PORT
        ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
        : env.ASPNETCORE_URLS
            ? env.ASPNETCORE_URLS.split(';')[0]
            : 'https://localhost:7070';
    
} else {
    const target = "https://quizgameserver20250322155036.azurewebsites.net"
}

// Vercel does not need HTTPS configuration
export default defineConfig({
    plugins: [plugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        proxy: {
            '^/api': {
                target,
                secure: false,
            },
            '^/uploads': {
                target,
                secure: false,
            },
        },
        port: 55026,
        ...(isVercel
            ? {} // Skip HTTPS settings on Vercel
            : {
                https: {
                    key: fs.readFileSync(keyFilePath),
                    cert: fs.readFileSync(certFilePath),
                },
            }),
    },
});
