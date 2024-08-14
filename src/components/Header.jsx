//criamos um objeto chamado "style para puxar as classes que forem inseridas lá no css da Header dessa forma: styles.header ou puxar outra class que queremos."
import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    //no javascript não trabalhamos com identificação chamada "class" chamamos de "className".
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite"/>
        </header>
    );
}