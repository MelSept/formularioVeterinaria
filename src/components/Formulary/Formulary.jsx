import {useState, useEffect} from "react"
import Error from "../Error/Error";

const Formulary = ({patients, setPatients, patient}) => {
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptoms, setSymptoms] = useState("");

    const [error, setError] = useState(false);

    useEffect (() => {
        if( Object.keys(patient).length > 0 ){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        } 
    }, [patient])

    const generarId = () => {
        const random = Math.random().toString(36).slice(2);
        const date = Date.now().toString(36);

        return random + date;
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        //validacion del formulario

        if([name, owner, email, date, symptoms].includes("")){
            console.log ("Hay almenos un campo vacio")

            setError(true)
            return;
        }  

        setError(false);

        //Objeto Paciente

        const objectPatient = {
            name,
            owner,
            email,
            date,
            symptoms,
            id: generarId()
        }

        if (patient.id) {
            //editando el registro
            objectPatient.id = patient.id
            const patientUpdated = patients.map (patientState => patientState.id ===
            patient.id ? objectPatient : patientState);
            
            setPatients(patientUpdated);
            setPatient({})

        } else {
            //Nuevo registro
            objectPatient.id = generarId();
            setPatients([...patients, objectPatient]);            

        }   
       
        //console.log(objetoPaciente);

        //Reiniciar el form
        
        setName("");
        setOwner("");
        setEmail("");
        setDate("");
        setSymptoms("");


    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                { error && <Error><p>Todos los campos son obligatorios</p></Error> }    
                <div className="mb-5"> 
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                         Nombre Mascota 
                    </label>   
                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                        /> 
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                         Nombre Propietario 
                    </label>   
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange = {(e) => setOwner(e.target.value)}/> 
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                         Email
                    </label>   
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}/> 
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                         Alta
                    </label>   
                    <input 
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange = {(e) => setDate(e.target.value)}/> 
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                         Sintomas 
                    </label>   
                    <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Sintomas"
                    value={symptoms}
                    onChange = {(e) => setSymptoms(e.target.value)}/>                    
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700
                    cursor-pointer transition-all"  
                    value = { patient.id ? "Editar Paciente" : "Agregar Paciente"}             
                />
            </form>
        </div>
    )

}

export default Formulary;