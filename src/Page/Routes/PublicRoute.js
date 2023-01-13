import About from "../About";
import Contact from "../Contact";
import Home from "../Home/Home";
import Service from "../Service";

export const PublicRoute = [
    {path:'/', name:Home, Component:Home },
    {path:'/service', name:Service, Component:Service },
    {path:'/contact', name:Contact, Component:Contact },
    {path:'/about', name:About, Component:About }
]