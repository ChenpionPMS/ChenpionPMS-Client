import Vue from 'vue';
import axios from 'axios';
import store from '@/store';
import router from '@/router';

const isDev = process.env.NODE_ENV === 'development';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Full config:  https://github.com/axios/axios#request-config
const appAxios = axios.create({
  baseURL: isDev ? '/api/v1' : process.env.VUE_APP_API_ENDPOINT,
});

appAxios.interceptors.request.use(
  (config) => {
    console.log('appAxios intercepted request:', config.url);

    return Promise.resolve(config);
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
appAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response) {
      const { status, msg, data } = error.response;

      switch (status) {
      case 404:
        console.log('找不到該頁面');
        break;
      case 500:
        console.log('伺服器出錯');
        break;
      case 503:
        console.log('服務失效');
        break;
      default:
        console.log(`連接錯誤${status}`);
      }
    }

    return Promise.reject(error.response);
  },
);

Plugin.install = () => {
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return appAxios;
      },
    },
    $axios: {
      get() {
        return appAxios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
