import React from 'react';
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import './LoginPage.css'

//imports components
import Logo from '../../components/Logo/Logo'
import Button from '../../components/button/Button'
                         

const LoginPage = (props) => {

  return (

    <>
      <div className='container__login'>

        <div className={'logo__login'}>
          <Logo />
        </div>

        <h1 className="h1__login">Faça seu login </h1>


        <form action="" className='input__container__login'>
          <fieldset className={'fieldset__login'}>
            <InputMask placeholder='CPF' mask="999.999.999.-99" />
            <input type="password" placeholder='Senha' />
          </fieldset>
        </form>



        <div className="input__check__login__container">

          <label className={"remember__login__container"}>
            <input type="checkbox"></input>
            <p>Lembrar-me</p>
          </label>

          <p><a a href="https://google.com.br">Esqueceu a senha?</a></p>

        </div>


        <div className="button__container__login">
          <Link to="/account">
            <Button className='button__cadastro__login' style={{}}>
              Login
            </Button>
          </Link>

          <Link to="/">
            <Button className=' button__cancelar__login' style={{}}>
              Cancelar
            </Button>
          </Link>
        </div>
      </div>

    </>

  );
}

export default LoginPage;