import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
// import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path'
import glob from 'glob'
import react from '@vitejs/plugin-react'
import usePluginImport from 'vite-plugin-importer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const pageDir = path.resolve(__dirname, 'src/pages')

  const env = loadEnv(mode, path.resolve(__dirname, 'src/environments'))

  console.log('[vite.config env]', env)
  console.log('[vite.config mode]', mode)

  return {
    root: pageDir,
    publicDir: path.resolve(__dirname, 'public'),

    plugins: [
      usePluginImport({
        libraryName: 'react-use',
        libraryDirectory: 'lib',
        style: false,
        camel2DashComponentName: false,
      }),
      usePluginImport({
        libraryName: 'zarm',
        libraryDirectory: 'es',
        style: true,
      }),
      // basicSsl(),
      react(),
      legacy({
        targets: ['>0.2%', 'not dead', 'not op_mini all'],
      }),
    ],

    build: {
      rollupOptions: {
        input: getEntries(pageDir),
      },

      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },

      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/submit_pfb': 'http://43.134.230.48:26659',
        '/balance': 'http://43.134.230.48:26659',
      },
    },

    envDir: path.resolve(__dirname, 'src/environments'),

    base: '',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})

function getEntries(pageDir: string) {
  return glob.sync(`${pageDir}/**/*.html`)
}
