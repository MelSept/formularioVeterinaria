import Paciente from "./Paciente"

const ListadoPacientes = (props) => {
  const {pacientes, setPaciente} = props; // Destructuring de los props
  
  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        {pacientes && (pacientes.length > 0) ? (
          <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
            </p>

            {pacientes.map( paciente => (
              <Paciente
                  key={paciente.id}
                  paciente={paciente} 
                  setPaciente={setPaciente}                 
              />  
            ))}
          </> 

        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {""}
              <span className="text-indigo-600 font-bold text-xl">y apareceran en este lugar</span>
            </p>          
          </>
        )}         


      </div>
  )
}

export default ListadoPacientes