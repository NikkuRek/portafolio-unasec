// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [
      // @ts-expect-error @tailwindcss/vite@4.3 expone tipos de Vite 8 frente al Vite 6 interno de Astro 5
      tailwindcss(),
      {
        name: 'astro-dev-virtual-ssr',
        config(_config, env) {
          if (env.command === 'serve') {
            return {
              ssr: {
                noExternal: [/^astro:/],
              },
            };
          }
          return undefined;
        },
      },
    ],
  },
});
