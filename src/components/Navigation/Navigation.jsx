import { Link } from "react-router-dom";
import style from './navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={style.nav_style}>
            <Link to='/generate'>Генерувати QR-код</Link>
            <Link to='/scan'>Відсканувати QR-код</Link>
            <Link to='/generateHistory'>Історія генерування</Link>
            <Link to='/scanHistory'>Історія сканування</Link>
            {/* <Link to='/game'>Адаптивна верстка тіла істоти</Link> */}
        </nav>
    );
};