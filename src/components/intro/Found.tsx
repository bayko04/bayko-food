import styles from "../../css/Intro.module.css"

interface FoundProps {
    img: string
    price: string
    title: string
}

const Found = ({ img, price, title }: FoundProps) => {
    return (
        <div className={styles.found}>
            <div className={styles.found__row}>
                <div className={styles.found__foodName}>
                    <img
                        className={styles.found__img}
                        src={img}
                        alt=""
                    />
                    <h3 className={styles.found__title}>{title}</h3>
                </div>

                <h4 className={styles.found__price}>{price}</h4>
            </div>
        </div>
    )
}

export default Found
