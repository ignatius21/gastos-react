import { useState,useEffect } from 'react';
import Mensaje from './Mensaje';

const Modal = ({setModal,guardarGasto,gastoEditar,setGastoEditar}) => {
    const ocultar = ()=>{
        setModal(false)
        setGastoEditar({})
    }

    const [nombre,setNombre] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [categoria,setCategoria] = useState('');
    const [mensaje,setMensaje] = useState('');
    const [id,setId] = useState('');
    const [fecha,setFecha] = useState('');

    useEffect(()=>{
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)

          }
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        if([nombre,cantidad,categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            // eliminar el mensaje de alerta despues de un tiempo,se le pasa el "set"(setMensaje)...no la funcion
            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return;
        }

        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }

  return ( 
    <>
    <div className='text-center'>
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
    </div>
    <form className="col-4 container mt-5" onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre Gasto</label>
              <input type="text" className="form-control shadow border-0" id="exampleInputEmail1" aria-describedby="emailHelp" value={nombre} onChange={e =>setNombre(e.target.value)}/>
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Cantidad</label>
              <input type="number" className="form-control shadow border-0" id="exampleInputPassword1" value={cantidad} onChange={e =>setCantidad(Number(e.target.value))}/>
          </div>
          <label htmlFor="exampleInputPassword1" className="form-label">Filtar Gastos</label>
          <select className="form-select mt-2 shadow border-0" aria-label="Default select example" value={categoria} onChange={e =>setCategoria(e.target.value)}>
              <option selected className="text-center" id="categoria" value="">--- Seleccionar ---</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
          </select>
          <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'} className="btn btn-primary text-white mt-5 container text-uppercase fw-bold"/>
          <button type="button" className="btn btn-secondary text-white mt-5 container text-uppercase fw-bold mb-5" data-bs-dismiss="modal" onClick={ocultar}>Cerrar</button>

          
      </form>
    </>
    

      

  )
}

export default Modal