import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { viteSingleFile } from "vite-plugin-singlefile"
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: "**/*.PNG",
})
