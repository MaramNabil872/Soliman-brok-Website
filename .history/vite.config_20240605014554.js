import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: "**/*.PNG",
    base: '/apps/Soliman-brok-Website/dist/',
})
