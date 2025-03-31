import { useState } from 'react';
import './CardGithub.css';
import logo from '../../../public/logo_github.svg';
import { CardPerfil } from '../CardPerfil/CardPerfil';

export function CardGithub() {
    const [usuario, setUsuario] = useState('');
    const [mostrarPerfil, setMostrarPerfil] = useState(false);
    const [usuarioPesquisado, setUsuarioPesquisado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsuarioPesquisado(usuario);
        setMostrarPerfil(true);
    };

    return (
        <>
            <div className='card_github'>
                <div className='container-logo'>
                    <img src={logo} alt="logo" className='logo' />
                    <span>Perfil <strong>Github</strong></span>
                </div>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <form className="d-flex " role="search" onSubmit={handleSubmit}>
                            <div className="input">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Search"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                                <button 
                                    className="btn btn-primary" 
                                    type="submit"
                                ></button>
                            </div>
                        </form>
                    </div>
                </nav>
                {mostrarPerfil && <CardPerfil usuarioGitHub={usuarioPesquisado} />}
            </div>  
        </>
    );
};

