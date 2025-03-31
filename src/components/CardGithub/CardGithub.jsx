import { useState } from 'react';
import './CardGithub.css';
import logo from '../../../public/logo_github.svg';
import luz_azul from '../../../public/luz_azul_esquerda.svg'
import luz_azul_ from '../../../public/luz_azul_direita.svg'
import quadro_pontilhado from '../../../public/quadro_pontilhado.svg'
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
            <div className='container-github'>
                <img src={luz_azul} alt="luz" className='luz_azul_esquerda'/>
                <img src={luz_azul_} alt="luz" className='luz_azul_direita'/>
                <img src={quadro_pontilhado} alt="quadro" className='quadro_pontilhado'/>
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
                                        placeholder="Digite um usuário do Github"
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


            </div>
        </>
    );
};

