import styles from "../../css/MoreInfo.module.css"

function FindUs() {
    return (
        <div className={styles.findUs}>
            <h2 className={styles.fundUs__title}>You can find us in 2gis</h2>
            {/* затычка всесто апи карты */}
            <div className={styles.findUs__map}>
                <img
                    src="images/content/map.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default FindUs
