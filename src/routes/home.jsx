import Home from "views/Home/Home";
import Statistics from "views/Statistics/Statistics";
import Maps from "views/Maps/Maps";
import Messaging from "views/Messaging/Messaging";
import Vehicles from "views/Vehicles/Vehicles";
import Users from "views/Users/Users";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Ana Sayfa",
    icon: "pe-7s-graph",
    component: Home
  },
  {
    path: "/statistics",
    name: "İstatistikler",
    icon: "pe-7s-graph2",
    component: Statistics
  },
  {
    path: "/maps",
    name: "Harita",
    icon: "pe-7s-map",
    component: Maps
  },
  {
    path: "/messaging",
    name: "Mesajlar",
    icon: "pe-7s-mail",
    component: Messaging
  },
  {
    path: "/vehicles",
    name: "Araçlar",
    icon: "pe-7s-car",
    component: Vehicles
  },
  {
    path: "/users",
    name: "Sürücüler",
    icon: "pe-7s-user",
    component: Users
  },
  
  { redirect: true, path: "/", to: "/home", name: "Home" }
];

export default dashboardRoutes;
