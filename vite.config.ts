// Licensed under CC BY-SA 4.0 and MIT - See LICENSE.md

import tailwindcss from '@tailwindcss/vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [tailwindcss(), /*enhancedImages(),*/ sveltekit()],
})
