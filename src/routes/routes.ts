import config from '../config';

// Layouts

// Pages
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
// import Following from '~/pages/Following';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
// import Live from '~/pages/Live';
// import Login from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    // { path: config.routes.following, component: Following },
    // { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
    // { path: config.routes.login, component: Login },
];

const privateRoutes:any = [];

export { publicRoutes, privateRoutes };
