import style from './Avatar.module.css'

export function Avatar({ hasborder=true, src}){
    return (
        <img className={hasborder ? style.avatarWithBorder : style.avatar} src={src} alt="Foto de perfil do usuário"/>
    );
}