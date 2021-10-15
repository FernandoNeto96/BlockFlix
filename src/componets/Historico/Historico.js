import { React, useContext } from "react";
import { MyContext } from "../../Context/Context";
import SimpleAccordion from "../Accordion/Accordion";
import {Details} from "./Historico.style";

export const Historico = () => {
    const { historico } = useContext(MyContext)
    


    if (historico === []) {
        return <p>Historico vazio</p>
    }


    return (
             <SimpleAccordion/>
          )
}