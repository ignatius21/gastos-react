import React from 'react'
import Gasto from './Gasto'

export const ListadoGastos = ({gastos,setGastoEditar,eliminarGasto,filtro,gastosFiltrados}) => {
  return (
    <div className='text-uppercase fw-bold container card card-body border-0 w-50'>
        

        {filtro ? (
          <>
              <h2 className='text-center'>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esa categoria'}</h2>
              {gastosFiltrados.map(gasto =>(
                <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}/>
            ))}
          </>
        ) : (
          <>
              <h2 className='text-center'>{gastos.length ? 'Gastos' : 'Agrega nuevos gastos'}</h2>
              {gastos.map(gasto =>(
                <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}/>
            ))}
        </>
        )
      } 
    </div>
  )
}

export default ListadoGastos
