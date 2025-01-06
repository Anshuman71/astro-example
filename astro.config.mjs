// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify()
});