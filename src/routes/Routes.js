import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Bienvenido from '../components/Bienvenidos'
import BusquedaPersonas from '../components/BusquedaPersonas'
import AltaPersona from '../components/AltaPersona'
import ModificarPersona from '../components/ModificarPersona'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={Bienvenido}/>
                <Route path="/busqueda" exact render={() =><BusquedaPersonas/>}/>
                <Route path="/altaPersonas" exact render={() =><AltaPersona/>}/>
                <Route path="/modificarPersona/:id" exact render={() =><ModificarPersona/>}/>
                <Redirect from="**" to="/"/>
            </Switch>
        </div>
    )
}
