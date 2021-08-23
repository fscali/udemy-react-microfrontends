import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';
// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el); //this mount function is something related to Vue, not related to our function
};

// if we are in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// Export the mount function for the container app to use it
export { mount };
