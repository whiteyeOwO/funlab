import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            generateScopedName: "[local]" // Use readable class names in development
        }
    }
});
