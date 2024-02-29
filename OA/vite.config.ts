import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		cors:true,
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				ws:false,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})