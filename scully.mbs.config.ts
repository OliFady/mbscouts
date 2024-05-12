import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'mbs',
  distFolder: './dist/mbs', // output directory of your Angular build artifacts
  sourceRoot: "./src",
  puppeteerLaunchOptions: {
    timeout: 120000, // Increase timeout to 120 seconds (2 minutes)
  },
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
