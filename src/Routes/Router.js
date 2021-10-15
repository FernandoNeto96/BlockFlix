//import Produtos from "./components/Produtos/Produtos";
import App from "../App";
import Login from "../componets/FeatureMovie/Login/Login";
import Product from "../componets/Product/Product";
//import Checkout from "./page/Checkout";
//import DetalheProduto from "./page/DetalheProduto";
import Carrinho from "../componets/Carrinho/Carrinho";
import { Historico } from "../componets/Historico/Historico";
//import SimpleAccordion from "../componets/Accordion/Accordion";



export const rotas = [
 
  {
    path: "/movies/:id",
    component: Product,
    title: "Detalhe do produto",
    isVisible: false,
  },
  {
    path: "/carrinho",
    component: Carrinho,
    title: "Carrinho",
    isVisible: true,
  },
  {
    path: "/historico",
    component: Historico,
    title: "historico",
    isVisible: true,
  },
  {
    path: "/home",
    component: App,
    title: "home",
    isVisible: true,
  },
  {
    path: "/",
    component: Login,
    title: "Login",
    isVisible: true,
  },
  
];

/*
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  console.log(window.location);
  return <h2>Users</h2>;
}
*/