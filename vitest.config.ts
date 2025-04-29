import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup/setup-tests.ts',
    include: ['./tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
})
