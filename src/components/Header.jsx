import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,gastos,setGastos}) => {
  return (
    <>
        <header className='container-fluid text-center text-uppercase fs-1 mt-5 fw-bold'>Planificador de gastos</header>
        {isValidPresupuesto ? (<ControlPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} gastos={gastos} setGastos={setGastos} setIsValidPresupuesto={setIsValidPresupuesto}/>) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}/>
        )}
        
    </>
    
  )
}

export default Header