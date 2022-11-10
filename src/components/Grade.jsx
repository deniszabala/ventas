//Permite definir los estados (variables) del componente 
import { useState } from "react";
export default function Grade() {
  //Definir los estados de este componente
  const [ident, setIdent] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [zone, setZone] = useState('');
  const [saledate, setSaledate] = useState('');
  const [salevalue, setSalevalue] = useState('');
  const [commissionvalue, setCommissionvalue] = useState('');
  const [bonus, setBonus] = useState('');
  //Metodos
  const handleSubmit = (event) => {
    event.preventDefault();//No hace postback, es decir, que no borre la información cuando se le de calcular
    //Validar que todos los datos se hayan diligenciado
    if (ident != "" && surname != "" && name != "" && zone != "" && saledate != "" && salevalue != "") {
      if (salevalue > 1000000 && salevalue <= 100000000) {
        if (zone == "z1") {
          let commissionvalue = (parseFloat(salevalue) * 2) / 100
          setCommissionvalue(commissionvalue.toFixed(0));
        }
        else {
          if (zone == "z2") {
            let commissionvalue = (parseFloat(salevalue) * 2.5) / 100
            setCommissionvalue(commissionvalue.toFixed(0));
          }
          else {
            if (zone == "z3") {
              let commissionvalue = (parseFloat(salevalue) * 3) / 100
              setCommissionvalue(commissionvalue.toFixed(0));
            }
          }
        }
      }
      else {
        alert("El valor de ventas no aplica para comsisión....")
      }
      if (salevalue >= 80000000) {
        let bonus = 50000
        setBonus(bonus.toFixed(0));
      }
      else {
        alert("El valor de ventas no aplica para bonificación....")
      }
    }//
    else {
      alert("Debe ingresar todos los datos.....")
    }
  }
  function onClean(e) {
    e.preventDefault();
    //Borrar el contenidode lo estados
    setIdent("");
    setName("");
    setSurname("");
    setZone("");
    setSaledate("");
    setSalevalue("");
    setCommissionvalue("");
    setBonus("");

  }
  return (
    <div className="container">
      <h2 text-aligne="center">Sistema de Ventas</h2>
      <form onSubmit={handleSubmit}>
        <div className="row ustify-content-center">
          <div className="col">
            <label htmlFor="ident">Identificación</label>
            <div>
              <input
                type="text"
                placeholder="Identificación"
                id="ident"
                name="ident"
                className="form-control"//Form-control para que quede responsive
                //se utiliza para guardar todo cambio en el input
                onChange={event => setIdent(event.target.value)}
                value={ident}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="surname">Apellidos</label>
            <div>
              <input
                type="text"
                placeholder="Apellidos"
                id="surname"
                name="surname"
                className="form-control"
                onChange={e => setSurname(e.target.value)}
                value={surname}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="surname">Nombre</label>
            <div>
              <input
                type="text"
                placeholder="Nombre"
                id="name"
                name="name"
                className="form-control"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="zone">Zona</label>
            <div>
              <select
                name="zone"
                id="zone"
                className='form-control'
                value={zone}
                onChange={e => setZone(e.target.value)}>
                <option value="" disabled>Seleccione una zona</option>
                <option value="z1">Norte</option>
                <option value="z2">Sur</option>
                <option value="z3">Oriente</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="saledate">Fecha Venta</label>
            <div>
              <input
                type="text"
                placeholder="Fecha Venta"
                id="saledate"
                name="saledate"
                className="form-control"
                onChange={e => setSaledate(e.target.value)}
                value={saledate}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="salevalue">Valor Venta</label>
            <div>
              <input
                type="text"
                placeholder="Valor Venta"
                id="salevalue"
                name="salevalue"
                className="form-control"
                onChange={e => setSalevalue(e.target.value)}
                value={salevalue}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="commissionvalue">Valor Comisión</label>
            <div>
              <input
                type="text"
                placeholder="Valor Comisión"
                id="commissionvalue"
                name="commissionvalue"
                className="form-control"
                onChange={e => setCommissionvalue(e.target.value)}
                value={commissionvalue}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="bonus">Bonificación</label>
            <div>
              <input
                type="text"
                placeholder="Bonificación"
                id="bonus"
                name="bonus"
                className="form-control"
                onChange={e => setBonus(e.target.value)}
                value={bonus}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className='btn btn-success mt-2'
              type='submit'    >
              Calcular
            </button>            
          </div>
          <div className="col-10">
            <form onSubmit={onClean}>      
              <button className='btn btn-dark mt-2
              '>Limpiar
              </button>
            </form>
          </div>

        </div>
      </form>
      </div> 
             
    
  )
}