import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useHistory } from "react-router-dom";
import firebase from '../../firebase/firebase'

const firestore = firebase.firestore();

const BusquedaPersonas = (props) => {
    const history = useHistory()
    const personaRef = firestore.collection('Persona')
    const query = personaRef.orderBy('nombre')

    const [personas] = useCollectionData(query, { idField: 'id' })

    const eliminarPersona = (id) => {
        personaRef.doc(id).delete()
    }

    const modificarPersona = (id) => {
        history.push(`/modificarPersona/${id}`)
    }

    return (
        <main role="main">
            <div className="container" style={{ marginTop: '100px' }}>
                <h1>Listado de persona</h1>
                <hr />
                {personas && personas.map((persona) => (
                    <ListadoPersonas 
                        key={persona.id} 
                        persona={persona} 
                        onEliminar={eliminarPersona}
                        onModificar={modificarPersona}
                        >
                    </ListadoPersonas>
                    ))}
            </div>
        </main>
    )
}

const ListadoPersonas = ({ persona: { nombre, apellido, correo, fechaNacimiento, id }, onEliminar, onModificar }) => {

    const eliminar = () => {
        onEliminar(id)
    }

    const modificar = () => {
        onModificar(id)
    }

    return (
        <div>
            <div className="row" style={{ padding: '0.5em' }}>
                <div className="col-2">
                    {nombre}
                </div>
                <div className="col-2">
                    {apellido}
                </div>
                <div className="col-3">
                    {correo}
                </div>
                <div className="col-2">
                    {fechaNacimiento}
                </div>
                <div className="col-1">
                    <button className="btn btn-primary" onClick={eliminar}>Eliminar</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-warning" onClick={modificar}>Modificar</button>
                </div>
            </div>
        </div>
    )
}


export default BusquedaPersonas;
