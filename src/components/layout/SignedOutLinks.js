import React from 'react'
import { NavLink } from 'react-router-dom'
import "../AppNav/navbarlogin.css"

const SignedOutLinks = () => {
  return (
    <div>
      <ul >
        {/* <ul><NavLink to='/crearusuario'>Registrarse</NavLink></ul> */}
        <ul><NavLink to='/entrar'>Ingresar</NavLink></ul>
      </ul>
    </div>
  )
}

export default SignedOutLinks