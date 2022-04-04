import {useState, useEffect} from "react"
import Header from "../Header"
import Formulary from "../Formulary"
import PatientsList from "../PatientsList"


function Layout() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState ({});

  useEffect (() => {
      const getLS = () => {
        const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];

        setPatients(patientsLS);
      }

      getLS();
  }, []);

  useEffect (() => {
      localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients]);

  const deletePatient = id => {
    const patientUpdated = patients.filter( patient => patient.id !== id);
    setPatients(patientUpdated)
  };
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulary
          patients={patients}
          setPatients={setPatients}
          patient={patient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
          

      </div>

    </div>
  )
}

export default Layout;