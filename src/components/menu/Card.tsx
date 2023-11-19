import styles from "../../css/Menu.module.css"
import { ICards } from "../types/types"

interface CardProps extends ICards {}

const Card = ({ img, title, text, price }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img
                    src={img}
                    alt=""
                />
            </div>
            <h3 className={styles.card__title}>{title}</h3>
            <p className={styles.card__text}>{text}</p>
            <div className={styles.card__line}></div>
            <div className={styles.card__row}>
                <h5 className={styles.card__price}>{price}</h5>
                <a
                    className={styles.card__cart}
                    href=""
                >
                    add to cart
                </a>
            </div>
        </div>
    )
}

export default Card
