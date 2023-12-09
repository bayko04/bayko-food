import styles from "../../css/Footer.module.css"

const Adresses = () => {
    return (
        <div className={styles.adresses}>
            <div className="container">
                <h2 className={styles.adresses__title}>Adresses</h2>
                <div className={styles.adresses__list}>
                    <ul>
                        <li className={styles.adresses__link}>
                            <a href="">
                                ​Проспект Шабдан Баатыра, 4а, Бишкек​135
                                филиалов
                            </a>
                        </li>
                        <li className={styles.adresses__link}>
                            <a href="">
                                ​Проспект Чуй, 115, Бишкек​40 филиалов
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.adresses__map}>
                    <img
                        src="/images/content/map.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Adresses
