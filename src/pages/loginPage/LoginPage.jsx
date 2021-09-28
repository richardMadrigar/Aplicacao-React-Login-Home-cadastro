import React from 'react';
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import './LoginPage.css'

import Logo from '../../components/Logo/Logo'
import Button from '../../components/button/Button'

const LoginPage = (props) => {

  return (
    <div className='container__login'>

      <div className={'logo__login'}>
        <Logo />
      </div>

      <h1 className="h1__login">Faça seu login </h1>


      <form action="" className='input__container__login'>
        <fieldset className={'fieldset__login'}>
          <InputMask placeholder='CPF'  mask="999.999.999.-99"  />
          <input type="password" placeholder='Senha' />
        </fieldset>
      </form>



      <div className="input__check__cadastro">
        <input type="checkbox"></input>
        <p>Concordo com os <a href="https://gooogle.com.br">termos e condições</a>.</p>
      </div>


      <div className="button__container__cadastro">
        <Link to="/account">
          <Button className='button__cadastro__homePage' style={{}}>
            Login
          </Button>
        </Link>

        <Link to="/">
          <Button className=' button__cancelar__homePage' style={{}}>
            Cancelar
          </Button>
        </Link>
      </div>
    </div>


  );
}

export default LoginPage;