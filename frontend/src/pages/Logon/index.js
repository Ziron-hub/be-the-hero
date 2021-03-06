import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg'

import heroesImg from '../../assets/heroes.png';

function Logon(){
    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id, senha});
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);   
            localStorage.setItem('ongToken', response.data.token);
        
            navigate('/profile');
        } catch(err){
            alert('Falha no login, tente novamente.');
        }
    }
    return (
       <div className="logon-container">
           <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value = {id}
                        onChange = { e => setId(e.target.value)}
                    />

                    <input type="password"
                        placeholder="Sua Senha" 
                        value = {senha}
                        onChange = { e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

           </section>
           

           <img src={heroesImg} alt="Heroes" />
       </div>
    );
}


export default Logon;
