import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edwinwmendez.github.io',
  base: '/PortafolioGrupal',
  outDir: './docs', // Cambia el directorio de salida a docs
  integrations: [tailwind()],
});