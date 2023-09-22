# "styled-components" 
    es una biblioteca popular en el ecosistema de React que permite definir y utilizar estilos CSS de una manera más eficiente y modular. Permite escribir estilos CSS directamente dentro de los componentes de React como si fueran componentes de JavaScript, lo que facilita la creación de componentes reutilizables y mantenibles.

    caracteristicas: 
    
    - Estilos en JavaScript: Con "styled-components", los estilos se definen utilizando plantillas literales de JavaScript (template literals). Esto significa que puedes escribir CSS directamente dentro de tus componentes de React como una cadena de texto en lugar de tener archivos CSS separados. Esto facilita la co-ubicación de estilos y componentes, lo que puede hacer que tu código sea más legible y mantenible.

    - Soporte para Props y Temas: Puedes condicionar tus estilos en función de las propiedades de los componentes o incluso utilizar temas para cambiar el aspecto de tu aplicación en función de ciertos valores.

    - Optimización y Estilo Dinámico: "styled-components" utiliza la optimización de CSS-in-JS para generar CSS eficiente y reduce la cantidad de estilos no utilizados. También admite la creación de estilos dinámicos en función de las props de tus componentes.

# Importacion
    import styled from 'styled-components';

# Aplicacion de estilos a un componente
    <!-- aplicando estilos a un componente que almacena una etiqueta h1 con estos estilos: -->
        const Title = styled.h1`
        color: grey;
        padding: 25px 0;
        `;

    <!-- Aplicando estilos a un header -->
        const StyledHeader = styled.header`
            background-color: ${colorPrimario};
            display: flex;
            justify-content: space-between;
            padding: 0 15vw;
            height: 10vh;
            align-items: center;
        `;
        //podemos utilizar variables con la sintaxis '${}' ya que todo el contenido de estilos se encuentra en backticks (``)

    <!-- StyledHeader es un componente y se puede usarsustituyendo <header></header> -->
        <StyledHeader>
        <img className="imagen-logo" src={logo} alt="Logo Smart Bank" />
        </StyledHeader>

    

# createGlobalStyle
    función que se utiliza para crear estilos globales en una aplicación React. 
        import { createGlobalStyle } from 'styled-components';


# props en styled components
    las props se utilizan para hacer que tus componentes estilizados sean más dinámicos y adaptables. Las props te permiten pasar valores y estilos personalizados a tus componentes estilizados en función de las necesidades específicas de tu aplicación.
        const BtnHEader = styled.a`
        
            color: ${ (props)=> props.primary ? 'green' : 'white'};

        `
    
    Se asigna por medio de un variable que contiene un callback, dentro de los parametros se encuantra el objeto props del componente. declaramos una condicion si la propiedad de props existe o no tomaras un estilo u otro.

    como se ha dicho la propiedad se pasa por props:
        
        <BtnHEader primary href="https://google.com">
          Ayuda
        </BtnHEader>
        <BtnHEader href="https://google.com">
          Ayuda
        </BtnHEader>
    
    En este caso un solo btn tiene la propiedad 'primary y tendra color green

# Herencia
    Al crear un componente podemos heredar los estilos de otro con la siguiente sintaxis: 

        const IconoMarginLeft = styled(Icono)`
            margin-left: 10px; 
        `;
    
    Lo que vemos es un nuevo componente que hereda los estilos de otro componente llamado 'Icono', y agrega nuevos propios. el cambio radica en styled() solamente, 

# Media Queries
    Se definen dentro del componente estilizado:

        export const Box = styled.div`
            width: 95%;

            @media (min-width: 768px) {
                width: 120rem; 
            }
        `;

# Anidacion de clases

        const Info = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            <!-- anidacion  -->
            .titulo{
                font-weight: 700;
            }
        `;

        <Info>
            <p className="titulo">Titulo</p>
            <p>Precio</p>
            <p>Vendedor</p>
        </Info>

# ThemeProvider
    que permite el uso de temas (themes) en tus aplicaciones de React. Los temas son una forma de gestionar de manera centralizada variables de estilo, como colores, fuentes y otros estilos, y aplicarlos de manera coherente a lo largo de toda tu aplicación.

    Definición de un Tema: Antes de utilizar ThemeProvider, primero debes definir un tema. Un tema es un objeto que contiene variables de estilo y valores que deseas utilizar en tu aplicación. Por ejemplo, puedes definir un tema con colores, fuentes y otros estilos:
        const miTema = {
            colores: {
                primario: 'blue',
                secundario: 'green',
            },
            fuentes: {
                principal: 'Arial, sans-serif',
            },
        };

    Uso de ThemeProvider: Luego, utilizas ThemeProvider para envolver tu aplicación con el tema que has definido. Esto se hace generalmente en el nivel superior de tu aplicación para que el tema esté disponible en todos los componentes descendientes:

        import React from 'react';
        import { ThemeProvider } from 'styled-components';

        function App() {
            return (
                <ThemeProvider theme={miTema}>
                    {/* Componentes de tu aplicación */}
                </ThemeProvider>
            );
        }

    Acceso a las Variables de Estilo: Una vez que hayas envuelto tu aplicación con ThemeProvider, puedes acceder a las variables de estilo del tema en cualquier componente utilizando la función styled de styled-components o el hook useTheme. Por ejemplo, puedes acceder a los colores definidos en el tema:

        import styled from 'styled-components';

        const Boton = styled.button`
            background-color: ${(props) => props.theme.colores.primario};
        `;
    
    O utilizando el hook useTheme:

        import { useTheme } from 'styled-components';

        function MiComponente() {
            const theme = useTheme();

            return (
                <div>
                    El color primario es: {theme.colores.primario}
                </div>
            );
        }