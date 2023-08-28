import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jesusgarciase.app',
  appName: 'JGSE Companion',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
