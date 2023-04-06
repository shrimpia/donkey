declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        HOST: string;
        PORT: string;
        MISSKEY_URL: string;
      }
    }
  }
}
