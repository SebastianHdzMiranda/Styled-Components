// import React from "react";
//componentes
import { Box } from "../UI";
import { lista } from '../../info'
import { Btn } from "../UI";
import Card from "../Card";
// Librerias
import styled from "styled-components";

const arrayLista = lista.cargos;



const List = ()=> {
    // console.log(arrayLista);
    return (
        <Box>
            {
                arrayLista.map( (cargo, i)=> {
                    return <Card key={i} cargo={cargo}/>
                })
            }
            <Btn>Ver más</Btn>
        </Box>
    );

};

export default List;