import styles from  './Header.module.css'
import icone from '../assets/Ignite-logo.svg'


export function Header(){
    return (
        <header className={styles.header}>
            <img src={icone} alt="Ignite social média site" />
        </header>
    );
}