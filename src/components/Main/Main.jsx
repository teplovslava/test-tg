import style from './Main.module.scss'

function Main() {
  return (
    <div className={style.main}>
        <h2 className={style.title}>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА </h2>
        <h2 className={style.title2}>СО&nbsp;СКИДКОЙ &minus;15% ПЕРВЫМ!</h2>
        <div className={style.price}>
            <div className={style.oldPrice}>750₽</div>
            <div className={style.newPrice}>690₽</div>
        </div>
        <div className={style.bottom}>
            <ul className={style.bottomList}>
                <li className={style.smallItem}><img src="./img/ginger.png" alt="" /><p className={style.firstDescr}>Содержит</p><p className={style.secondDescr}>имбирь</p></li>
                <li className={style.bigItem}><img src="./img/nootris (1).png" alt="" /><p className={style.firstDescr}>+ Бесплатная доставка </p><p className={style.secondDescr}>Специальная цена</p></li>
                <li className={style.smallItem}><img src="./img/vorus.png" alt="" /><p className={style.firstDescr}>Нейтрализует </p><p className={style.secondDescr}>вирусы</p></li>
            </ul>
        </div>
        <button className={style.addBtn}>Оформить заказ!</button>
    </div>
  )
}

export default Main