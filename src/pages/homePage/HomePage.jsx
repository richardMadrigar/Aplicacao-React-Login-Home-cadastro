import React from 'react';
import './HomePage.css'
import { Link } from "react-router-dom";

//imports components
import Logo from '../../components/Logo/Logo'
import Button from '../../components/button/Button'


const Home = (props) => {

  return (
    <>
      <div className={'container__homePage'}>

        <div className={'logo__homePage'}>
          <Logo />
        </div>


        <div className="button__container__homePage">
          <Link to="/cadastro">
            <Button className=' button__cadastro__homePage' style={{ fontSize: '1.1rem' }}>
              Cadastre-se
            </Button>
          </Link>

          <Link to="/login">
            <Button className='button__login__homePage' >
              Faça seu Login
            </Button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default Home;