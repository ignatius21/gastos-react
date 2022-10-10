import {useEffect,useState} from 'react';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import Swal from 'sweetalert2'



const ControlPresupuesto = ({gastos,setGastos,presupuesto,setPresupuesto,setIsValidPresupuesto}) => {
    const [porcentaje,setPorcentaje] = useState(0);
    const [disponible,setDisponible] = useState(0);
    const [gastado,setGastado] = useState(0);

    useEffect(() => {
     const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad + total,0)
     const totalDisponible = presupuesto - totalGastado

     // calcular el porcentaje gastado para mostrar en la barra de progreso
     const nuevoPorcentaje = (((presupuesto -totalDisponible) / presupuesto) * 100).toFixed(2);
     
     setDisponible(totalDisponible)
     setGastado(totalGastado);

     setTimeout(()=>{
        setPorcentaje(nuevoPorcentaje)
     },500)
    
    }, [gastos])
    

      const formatearCantidad = (cantidad) =>{
        var formatear = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
        })
        return formatear.format(cantidad)
      }

      const handleResetApp = () =>{
        const resultado = Swal.fire({
            title: 'Desea eliminar el presupuesto y los gastos?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((resultado) => {
            if (resultado.isConfirmed) {
                setGastos([]),
                setPresupuesto(0),
                setIsValidPresupuesto(false)
            }
          })
      }


  return (
      <div className="card mb-3 mt-4 container col-5 shadow border-0">
        <div className='position-relative'>
            <button type="button" className="btn btn-danger text-uppercase fw-bold mt-2 position-absolute top-0 end-0" onClick={handleResetApp}>Reiniciar App</button>
        </div>
        
          <div className="row g-0">
              <div className="col-md-3 mx-auto mt-3 mb-3">
                  <CircularProgressbar
                  styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#F95151' : '#6ED9F9',
                    trailColor: '#EAEAEA'
                  })} 
                  value={porcentaje}
                  text={`${porcentaje}%`} className='fw-bold'
                  />
              </div>
              <div className="col-md-8 mt-5">
                  <div className="card-body">
                      <p className="card-title text-uppercase fw-bold"><span className="text-info">Presupuesto:</span>
                      <span className="p-2">{formatearCantidad(presupuesto)}</span></p>
                      <p className={`${disponible < 0 ? 'text-danger fw-bold' : 'card-title fw-bold text-success'}`}><span className={`${disponible < 0 ? 'text-danger fw-bold text-uppercase' : 'text-info text-uppercase'}`}>Disponible</span>
                      <span className="p-2">{formatearCantidad(disponible)}</span></p>
                      <p className="card-title text-uppercase fw-bold"><span className="text-info">gastado:</span>
                      <span className="p-2">{formatearCantidad(gastado)}</span></p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ControlPresupuesto