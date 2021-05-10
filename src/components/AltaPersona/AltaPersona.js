import React,{ useRef} from 'react';

import firebase from '../../firebase/firebase'

const firestore = firebase.firestore();

const AltaPersona = () => {
    const form = useRef()

    const submit = async (event) => {
        event.preventDefault()
        const persona = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            correo: event.target[2].value,
            fechaNacimiento: event.target[3].value,
        }

        try {
            const ref = await firestore.collection('Persona')
            const data = await ref.where('correo','===',persona.correo.trim()).get()
            const resultado = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
            if(resultado.length === 0){
                ref.add(persona)
                alert("Se a creado con existo!!!")
                form.current.reset()
            }else{
                alert("Ya existe persona con ese correo")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container" style={{ paddingTop: '5em' }}>
            <h1>Alta de persona</h1> 
            <hr/>
            <div className="row">
                <form className="needs-validation" ref={form} onSubmit={submit}>
                    <FormInput
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                    ></FormInput>
                    <FormInput
                        type="text"
                        id="apellido"
                        placeholder="Apellido"
                    ></FormInput>
                    <FormInput
                        type="email"
                        id="correo"
                        placeholder="Correo"
                    ></FormInput>
                    <FormInput
                        type="date"
                        id="fechaNacimiento"
                        placeholder="Fecha de nacimiento"
                    ></FormInput>

                    <button className="btn btn-primary m-2" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

const FormInput = ({ type, id, placeholder }) => {
    return (
        <div className="col-6">
            <label className="form-label" htmlFor={id}>{placeholder} </label>
            <input
                className="form-control"
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default AltaPersona;
