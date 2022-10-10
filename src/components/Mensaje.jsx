const Mensaje = ({children}) => {
    
  return (
    <div className="alert alert-danger mt-4 container col-4 text-uppercase fw-bold" role="alert">{children}</div>
  )
}

export default Mensaje