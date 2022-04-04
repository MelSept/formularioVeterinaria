import Patient from "../Patient"

const PatientsList = (props) => {
  const {patients, setPatient, deletePatient} = props; // Destructuring de los props
  
  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        {patients && (patients.length > 0) ? (
          <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
            </p>

            {patients.map( patient => (
              <Patient
                  key={patient.id}
                  patient={patient} 
                  setPatient={setPatient} 
                  deletePatient={deletePatient}                
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

export default PatientsList;