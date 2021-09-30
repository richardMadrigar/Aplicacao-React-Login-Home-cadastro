import React from 'react';
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import './Register.css'

//imports components
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'


const Register = () => {
  return (
    <>
      <div className='container__cadastro'>

        <div className={'logo__cadastro'}>
          <Logo />
        </div>

        <h1 className="h1__cadastro"> Cadastre-se </h1>

        <p className={'p__text__cadastro'}> Entre com seus dados para criar uma conta de coloborador: </p>


        <form action="" className='input__container__cadastro'>
          <fieldset className={'fieldset__cadastro'}>
            <input type="text" placeholder='Nome Completo' required />
            <input type="text" placeholder='E-mail' />
            <InputMask placeholder='Whatsapp' mask=" (99) 99999-9999" />
            <InputMask placeholder='Celular' mask=" (99) 99999-9999" />
            <InputMask placeholder='RG' mask="99.999.999-9" />
            <InputMask placeholder='CPF' mask="999.999.999.-99" />
            <input type="password" placeholder='Senha' />
            <input type="password" placeholder='Confirmar Senha' />
          </fieldset>
        </form>


        <div className="input__check__cadastro">
          <input type="checkbox"></input>
          <p>Concordo com os <a href="https://google.com.br">termos e condições</a>.</p>
        </div>


        <div className="button__container__cadastro">
          <Link to="/account">
            <Button className='button__cadastro__cadastro' >
              Cadastre-se
            </Button>
          </Link>
          <Link to="/">
            <Button className=' button__cancelar__cadastro' >
              Cancelar
            </Button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default Register;