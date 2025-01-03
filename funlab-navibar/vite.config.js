import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // base: process.env.NODE_ENV === 'production' ? '/funlab/' : '/',
    base:process.env.NODE_ENV === "production" ? "/funlab/" : "/", 
    plugins: [react()],
    // css: {
    //     modules: {
    //         generateScopedName: "[local]" // Use readable class names in development
    //     }
    // }
});
