import Ejemplo from "../pages/ejemplo";
import JuanFernandoPertuz from "../pages/JuanFernandoPertuz";
import Home from "../pages/home";

export const childrenRouterList = [
    {
        index: true,
        Component: Home,
        text: "Home"
    },
    {
        path: "login",
        Component: Ejemplo,
        text: "Ejemplo"
    },
    {
        path:"to-do-list",
        Component: JuanFernandoPertuz,
        text: "Juan Fernando Pertuz"
    }
]