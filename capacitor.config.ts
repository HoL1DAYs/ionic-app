import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionictestapp',
  appName: 'ionic-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
