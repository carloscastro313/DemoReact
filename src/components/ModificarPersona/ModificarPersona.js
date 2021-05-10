import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import firebase from '../../firebase/firebase'
import { ClipLoader } from 'react-spinners'

const firestore = firebase.firestore();

const ModificarPersona = (props) => {
    const history = useHistory()
    const { id } = useParams()
    const [persona, setPersona] = useState('')

    useEffect(() => {
        const obtenerDatos = async (route, uid) => {
            try {
                const data = await firestore.collection('Persona').doc(uid).get()
                const arrayData = data.data()
                if (arrayData) {
                    setPersona(arrayData)
                }
            } catch (error) {
                console.log(error)
                route.push('/busqueda')
            }
        }
        obtenerDatos(history,id)
        return() => {
            
        }
    })

    const submit = async (event) => {
        event.preventDefault()
        const persona = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            correo: event.target[2].value,
            fechaNacimiento: event.target[3].value,
        }

        try {
            await firestore.collection('Persona').doc(id).update(persona)
            alert("Se a modificado con exito!!!")
        } catch (error) {
            alert("Ya no existe la persona")
            console.log(error)
        }
        history.push('/busqueda')
    }

    return (

        <div className="container" style={{ paddingTop: '5em' }}>
            <h1>Modificar persona</h1>
            <hr />
            <div className="row">
                {persona
                    ?
                    <form className="needs-validation" onSubmit={submit}>
                        <FormInput
                            type="text"
                            id="nombre"
                            placeholder="Nombre"
                            value={persona.nombre}
                        ></FormInput>
                        <FormInput
                            type="text"
                            id="apellido"
                            placeholder="Apellido"
                            value={persona.apellido}
                        ></FormInput>
                        <FormInput
                            type="email"
                            id="correo"
                            placeholder="Correo"
                            block={true}
                            value={persona.correo}
                        ></FormInput>
                        <FormInput
                            type="date"
                            id="fechaNacimiento"
                            placeholder="Fecha de nacimiento"
                            value={persona.fechaNacimiento}
                        ></FormInput>

                        <button className="btn btn-primary m-2" type="submit">Submit</button>
                    </form>

                    : <ClipLoader ></ClipLoader>
                }
            </div>
        </div>
    )
}

const FormInput = ({ type, id, placeholder, block = false, value = '' }) => {
    return (
        <div className="col-6">
            <label className="form-label" htmlFor={id}>{placeholder} </label>
            <input
                className="form-control"
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                readOnly={block}
                defaultValue={value}
                required
            />
        </div>
    )
}


export default ModificarPersona;
