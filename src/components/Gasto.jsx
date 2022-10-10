import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from '../helpers';




import IconoComida from '../img/comida.png'
import IconoCasa from '../img/casa.png'
import IconoGastos from '../img/gastos.png'
import IconoOcio from '../img/ocio.png'
import IconoSalud from '../img/salud.png'
import IconoSuscribir from '../img/suscribir.png'


const diccionarioIconos = {
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscribir

}

const Gasto = ({gasto,setGastoEditar,eliminarGasto}) => {
    const {categoria,nombre,cantidad,id,fecha} = gasto;

    const leadingActions = () =>(
      <LeadingActions>
        <SwipeAction onClick={()=> setGastoEditar(gasto)}>
          <p>Editar</p>
        </SwipeAction>
      </LeadingActions>
    )

    const trailingActions = () =>(
      <TrailingActions>
        <SwipeAction  onClick={()=>eliminarGasto(id)} destructive={true}>
          <p>Eliminar</p>
        </SwipeAction>
      </TrailingActions>
    )
  return (
    <>
      <SwipeableList>
        <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
          <div className='container card card-body w-75 shadow border-0 mt-3'>
            <img className='container w-25 mb-4 ' src={diccionarioIconos[categoria]} alt='icono gasto' />
            <p className='d-flex'>{nombre} <span className='m-auto fs-4'>${cantidad}</span></p>
            <p>{categoria}</p>
            <p>Agregado el:{''} <span>{formatearFecha(fecha)}</span></p>
          </div>
        </SwipeableListItem>
      </SwipeableList>
        
    </>
    
  )
}

export default Gasto