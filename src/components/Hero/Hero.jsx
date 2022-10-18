import style from './Hero.module.scss'

function Hero() {
  return (
    <div className={style.hero}>
        <h1 className={style.heroTitle}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
        <p className={style.heroDescr}>Всего пять секунд в&nbsp;день помогут укрепить иммунитет и&nbsp;повысить защитные силы организма</p>
        <h3 className={style.smallTitle}>NOOTRIS ПОМОГАЕТ</h3>
        <p className={style.smallDescr}>Вашему организму во&nbsp;время пандемии и&nbsp;сезонных простуд</p>

    </div>
  )
}

export default Hero