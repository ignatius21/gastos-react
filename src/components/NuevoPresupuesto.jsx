import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto,setPresupuesto,setIsValidPresupuesto}) => {

  const [mensaje,setMensaje] = useState('');

  const handlePresupuesto = (e) =>{
    e.preventDefault();
    if(!presupuesto || presupuesto < 0){
      setMensaje('No es un presupuesto valido')
      return;
      
    }
    setMensaje('')
    setIsValidPresupuesto(true);
  }

  if(!setIsValidPresupuesto === false){
    setTimeout(() => {
      setMensaje('')
    }, 3000);
  }

  
  return (
    <div className='text-center mt-5 container'>
      <form onSubmit={handlePresupuesto}>
        <div className='mb-5'>
          <label  className="mt-4 text-uppercase fw-bold">Definir Presupuesto</label>
          <input type="number" placeholder='Presupuesto' className="d-flex mt-4 text-center col-4 container rounded shadow border" value={presupuesto}
          onChange={e => setPresupuesto(Number(e.target.value))}/>
        </div>
        <button type="submit" className="btn btn-primary text-uppercase mx-auto col-4">Añadir</button>
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto