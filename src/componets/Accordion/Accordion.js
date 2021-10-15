import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MyContext } from "../../Context/Context";
import { useContext } from "react";
import "./Accordion.css"

export default function SimpleAccordion() {
  const { historico } = useContext(MyContext)

  return (
    <div>
      <Container maxWidth="lg" >
        <h1>Historico:</h1>
        {historico.map(historico => {
          console.log(historico)
          return (
            <>
              <Accordion style={{ marginTop: "10px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Pedido:{historico.numeroDoPedido}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                  <Typography >
                    <h2 >Data: {historico.data}</h2>
                    {historico.listaDeFilmes.map((element) => (
                      <h2 >{element.title}</h2>
                    ))}
                    <h2 style={{ color: "#E1181F" }} >Total:R${Number(historico.totalCarrinho).toFixed(2)}</h2>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          )
        })}

      </Container>
    </div>
  );
}