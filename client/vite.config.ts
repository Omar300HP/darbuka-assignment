import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/infrastructure/tests.setup.ts'
    },
    resolve: {
      alias: {
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        pages: resolve(__dirname, 'src', 'pages'),
        providers: resolve(__dirname, 'src', 'providers'),
        routes: resolve(__dirname, 'src', 'routes'),
        features: resolve(__dirname, 'src', 'features'),
        services: resolve(__dirname, 'src', 'services'),
        types: resolve(__dirname, 'src', 'types'),
        utils: resolve(__dirname, 'src', 'utils'),
        config: resolve(__dirname, 'src', 'config'),
        libs: resolve(__dirname, 'src', 'libs'),
        assets: resolve(__dirname, 'src', 'assets')
      }
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]'
      }
    }
  };
});
