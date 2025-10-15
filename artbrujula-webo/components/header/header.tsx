import styles from '../styles/header.module.scss';
import Image from 'next/image';

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.dropdown}>
                    <a href="#">BRÚJULA ARTISTICA</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href='/who'>Quienes somos</a></li>
                        <li><a href='/contact'>Contacto</a></li>
                        <li>¿Quieres ser voluntario?</li>
                    </ul>
                </li>
                <li className={styles.dropdown}>
                    <a href="#">¿Qué ofrecemos?</a>
                    <ul className={styles.dropdownMenu}>
                        <li><a href='/services'>Servicios</a></li>
                        <li><a href='/events'>Eventos</a></li>
                        <li><a href='/exhibitions'>Exposiciones</a></li>
                    </ul>
                </li>
                <li><a href='/galery'>Galeria</a></li>

            </ul>
        </nav>
    );
}

export default function Header() {
    return(
        <div className={styles.header}>
           <Image
            src="/assets/images/AF_logo_Brujula_HorizontalBlanco.png"
            alt="Art Brújula Logo"
            width={200} 
            height={80}
            />
            <NavBar />
            <h1 className={styles.title}>Art Ggg</h1>
        </div>
    )
}