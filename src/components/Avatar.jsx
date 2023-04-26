import style from './Avatar.module.css'
export function Avatar(proops){
    return (
        <img src={proops.src} alt="Foto de perfil do usuário" className={style.avatar}/>
    );
}