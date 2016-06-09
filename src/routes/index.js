import App from 'components/App';
import HomeRoute from 'routes/Home';
import DynamicPageRoute from 'routes/DynamicPage';

const rootRoute = () => ({
  component: 'div',
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: HomeRoute,
    childRoutes: [
      DynamicPageRoute,
    ],
  }],
});

export default rootRoute;
