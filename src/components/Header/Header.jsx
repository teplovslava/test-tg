import style from './Header.module.scss'

function Header() {
  return (
    <header className={style.header}>
        <img className={style.logo}  src="./img/Vector.svg" alt="logo" />
        <nav className={style.nav}>
            <ul className={style.navList}>
                <li className={style.navLIstItem}><a href="#">FAQ</a></li>
                <li className={style.navLIstItem}><a href="#">Оплата и доставка</a></li>
                <li className={style.navLIstItem}><a href="#">Возврат</a></li>
                <li className={style.navLIstItem}><a href="#">Исследования</a></li>
                <li className={style.navLIstItem}><a href="#">Личный кабинет</a></li>
                <li className={style.navLIstItem}><a href="tel:888006000990">8 8 (800) 600-09-90</a></li>
            </ul>
        </nav>
        <button className={style.card}><img src="./img/Vector (1).svg" alt="" /><p className={style.cardCount}>1</p></button>
    </header>
  )
}

export default Header