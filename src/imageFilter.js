import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import { IconoTema } from './Components/UI';


// Cuando es una funcion callback al importarlo a otro archivo, el nombre de la importacion sera el del archivo donde se encuentra la funcion callback, en esta caso para llamar esta funcion seria con import imageFilter from......
export default (type)=>{
    // console.log(type);
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt='Restaurante'/>,
        Salud: <IconoTema src={salud} alt='Salud'/>,
        // Otros: <IconoTema src={otros} alt='Otros'/>,
        Transporte: <IconoTema src={transporte} alt='Transporte'/>,
        Utilidades: <IconoTema src={utilidades} alt='Utilidades'/>,
        default: <IconoTema src={otros} alt='Otros'/>,
    }

    // Si no existe un imagenes[type] dentro del objeto, entonces asignale la imagen que se encuentra en default
    return Images[type] || Images.default;
}