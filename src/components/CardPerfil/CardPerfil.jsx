// import { useEffect, useState } from 'react';
// import './CardPerfil.css';

// export function CardPerfil({ usuarioGitHub }) {
//     const [perfil, setPerfil] = useState(null);
//     const [erro, setErro] = useState(false);

//     useEffect(() => {
//         if (!usuarioGitHub) {
//             setPerfil(null);
//             setErro(false);
//             return;
//         }

//         fetch(`https://api.github.com/users/${usuarioGitHub}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Usuário não encontrado');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setPerfil({
//                     nome: data.name,
//                     avatar: data.avatar_url,
//                     bio: data.bio
//                 });
//                 setErro(false);
//             })
//             .catch(() => {
//                 setPerfil(null);
//                 setErro(true);
//             });
//     }, [usuarioGitHub]);

//     if (!usuarioGitHub) return null;

//     if (erro) {
//         return <p>Usuário não encontrado</p>;
//     }

//     if (!perfil) {
//         return <p>Carregando...</p>;
//     }

//     return (
//         <div className='container_borda'>
//             <div className='container_perfil'>
//                 <div className='container_foto'>
//                     <img src={perfil.avatar} alt="perfil" className='perfil_git' />
//                 </div>
//                 <div className='container_descricao'>
//                     <h3>{perfil.nome}</h3>
//                     <span>{perfil.bio || 'Sem bio disponível'}</span>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useEffect, useState } from 'react';
import './CardPerfil.css';

export function CardPerfil({ usuarioGitHub }) {
    const [perfil, setPerfil] = useState(null);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        if (!usuarioGitHub) {
            setPerfil(null);
            setErro(false);
            return;
        }

        fetch(`https://api.github.com/users/${usuarioGitHub}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Usuário não encontrado');
                }
                return response.json();
            })
            .then(data => {
                setPerfil({
                    nome: data.name,
                    avatar: data.avatar_url,
                    bio: data.bio
                });
                setErro(false);
            })
            .catch(() => {
                setPerfil(null);
                setErro(true);
            });
    }, [usuarioGitHub]);

    if (!usuarioGitHub) return null;

    if (erro) {
        return (
            <div className='container_borda erro_container'>
                <span className='erro_texto'>Usuário não encontrado</span>
            </div>
        );
    }

    if (!perfil) {
        return <p>Carregando...</p>;
    }

    return (
        <div className='container_borda'>
            <div className='container_perfil'>
                <div className='container_foto'>
                    <img src={perfil.avatar} alt="perfil" className='perfil_git' />
                </div>
                <div className='container_descricao'>
                    <h3>{perfil.nome}</h3>
                    <span>{perfil.bio || 'Sem bio disponível'}</span>
                </div>
            </div>
        </div>
    );
}



