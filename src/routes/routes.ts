import config from "../config";

// Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Messenger from "../pages/Messenger/Messenger";
import Profile from "../pages/Profile/Profile";
import Watch from "../pages/Watch/Watch";
import Friend from "../pages/Friend/Friend";
import Group from "../pages/Group/Group";
import Marketplace from "../pages/Marketplace/Marketplace";
import Notification from "../pages/Notification/Notification";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.friend, component: Friend },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.messenger, component: Messenger },
  { path: config.routes.watch, component: Watch },
  { path: config.routes.group, component: Group },
  { path: config.routes.marketplace, component: Marketplace },
  { path: config.routes.notification, component: Notification },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
