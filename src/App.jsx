import { useState,useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import {generarId} from './helpers'
import plus from './img/plus.png'


function App() {
  const [presupuesto,setPresupuesto] = useState(Number(localStorage.getItem('presupuesto') ?? 0));
  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false);
  const [modal,setModal] = useState(false)
  const [gastos,setGastos] = useState([...(JSON.parse(localStorage.getItem('gastos'))?? [])]);
  const [gastoEditar,setGastoEditar] = useState({});
  const [filtro,setFiltro] = useState('');
  const [gastosFiltrados,setGastosFiltrados] = useState([]);

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
    }
  },[gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0 )
  },[presupuesto])

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true)
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(gastos)?? [])
  },[gastos])

  useEffect(()=>{
    const gastosLS = Number(localStorage.getItem('gastos')) ?? 0;
    if(gastosLS > 0){
      setGastos(true)
    }
  })

  useEffect(()=>{
    if(filtro){
      // filtrar gastos por categoria
      const gastosFiltrado = gastos.filter(gasto =>gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrado)
    }
  },[filtro])

  const handleNuevoGasto = () =>{
    setModal(true)
    setGastoEditar({})
  }

  const guardarGasto = gasto =>{
    if(gasto.id){
      // Actualizamos el registro del gasto
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    }else{
      // si no hay un nuevo gasto se crea uno nuevo
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto]);
    }
    
    setModal(false);
  }

  const eliminarGasto = id =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id )
    setGastos(gastosActualizados)
  }

  return (
    <>
    <div>
      <Header
      gastos={gastos}
      setGastos={setGastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}/>
    </div>

    {isValidPresupuesto && (
      <>
          <main>
            <Filtros
            filtro={filtro}
            setFiltro={setFiltro}/>
            <ListadoGastos 
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}/>
          </main>

          <div className='col align-self-center text-center mt-5'>
            <img className='icono'
              src={plus}
              alt="icono"
              onClick={handleNuevoGasto}
            />
          </div>
      </>
      
    )}

    {modal && < Modal
    setModal={setModal}
    guardarGasto={guardarGasto}
    gastoEditar={gastoEditar}
    setGastoEditar={setGastoEditar}/>}
    
    </>
    
  )
}

export default App
