const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className='card card-body container border-0'>
        <select className="form-select container w-25 shadow border-0" value={filtro} onChange={e=>setFiltro(e.target.value)}>
            <option selected className="text-center" id="categoria" value="">Todos los Gastos</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
      </select>
    </div>
      
  )
}

export default Filtros