/// <reference types="vite/client" />

/**
 * startWith VITE_
 */
interface ImportMetaEnv {
  readonly VITE_API_PREFIX: string
  readonly VITE_ROUTE_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
