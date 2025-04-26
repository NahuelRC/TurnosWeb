import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';   

function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumno, setAlumno] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    detalleClase: '',
    clasesRestantes: '',
    fechaHoraProximaClase: ''
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno({
      ...alumno,
      [name]: value
    });
  };

  const agregarAlumno = () => {
    setAlumnos([...alumnos, alumno]);
    setAlumno({
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      detalleClase: '',
      clasesRestantes: '',
      fechaHoraProximaClase: ''
    });
    console.log(alumno);
    console.log(alumnos);
  };


  return (
    <div className='container'>
      <div className='container my-4'>
        <div className='row'>
          <div className='col'>
            <h2 className='text-start grid'>Gestion Alumnos</h2>
          </div>
          <div className='col-auto'>
            <button className='btn btn-primary ' data-bs-toggle="modal" data-bs-target="#usuarioDetaileModal" >Agregar Alumno</button>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='row'>
          <div className='col'>
            <div className="col d-flex justify-content-start">
              <input
                className="form-control w-auto my-4"
                placeholder="Buscar alumno..."
                type="text"
              />
            </div>

          </div>
        </div>
        <div className='row'>
          <div className='col-auto my-4'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nombre y Apellido</th>
                  <th scope="col">Fecha y Hora Próxima Clase</th>
                  <th scope="col">Detalles de Clase</th>
                  <th scope="col">Clases Restantes</th>
                  <th scope="col">Fecha Nacimiento</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí puedes mapear los alumnos */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="modal fade" id="usuarioDetaileModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Agregar Alumno</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="row">
                <div className="col-4 mb-3">
                  <label htmlFor="nombreusuario" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombreusuario" name="nombre" value={alumno.nombre} onChange={handleChange} />
                </div>

                <div className="col-4 mb-3">
                  <label htmlFor="apellidousuario" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="apellidousuario" name="apellido" value={alumno.apellido} onChange={handleChange} />
                </div>

                <div className="col-4 mb-3">
                  <label htmlFor="fechanac" className="form-label">Fecha de Nacimiento</label>
                  <input type="date" className="form-control" id="fechanac" name="fechaNacimiento" value={alumno.fechaNacimiento} onChange={handleChange} />
                </div>

                <div className="col-4 mb-3">
                  <label htmlFor="detalleClaseUsuario" className="form-label">Detalle de Clase</label>
                  <input type="text" className="form-control" id="detalleClaseUsuario" name="detalleClase" value={alumno.detalleClase} onChange={handleChange}/>
                </div>

                <div className=" col-4 mb-3">
                  <label htmlFor="clasesRestantesUsuario" className="form-label">Clases Restantes</label>
                  <input type="number" className="form-control" id="clasesRestantesUsuario" name="clasesRestantes" value={alumno.clasesRestantes} onChange={handleChange}/>
                </div>

                <div className="col-4 mb-3">
                  <label htmlFor="fechaHoraProximaClaseUsuario" className="form-label">Fecha y Hora Próxima Clase</label>
                  <input type="datetime-local" className="form-control" id="fechaHoraProximaClaseUsuario" name="fechaHoraProximaClase" value={alumno.fechaHoraProximaClase} onChange={handleChange}/>
                </div>
                </div> 
              </form>
            </div>
            

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={agregarAlumno} >Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alumnos;
