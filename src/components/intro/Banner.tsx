import { isTrue, isFalse } from "../../reducers/isActiveSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import { useEffect, useState } from "react"
import styles from "../../css/Intro.module.css"
import bannerData from "../../data/bannerData"

function Banner() {
    const [currentInd, setcurrentInd] = useState(1)

    const dispatch = useDispatch()
    const isActive = useSelector(
        (state: RootState) => state.active.isActiveValue
    )
    const [copyData, setCopyData] = useState([
        bannerData[bannerData.length - 1],
        ...bannerData,
        bannerData[0],
    ])
    const [transition, setTransition] = useState(true)

    // showbtns
    const handleEnter = (): void => {
        dispatch(isTrue())
    }
    const handleLeave = (): void => {
        dispatch(isFalse())
    }

    // bannerSlider
    const changeSlide = (index: number): void => {
        if (index == 0) {
            setcurrentInd(index)
            setTimeout(() => {
                setcurrentInd(bannerData.length)
                setTransition(false)
            }, 500)
        } else if (index == bannerData.length + 1) {
            setcurrentInd(index)
            setTimeout(() => {
                setcurrentInd(1)
                setTransition(false)
            }, 500)
        } else {
            setTransition(true)
            setcurrentInd(index)
        }
    }

    const nextSlide = (): void => {
        changeSlide(currentInd + 1)
    }
    const prevSlide = (): void => {
        changeSlide(currentInd - 1)
    }

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`${styles.banner} ${isActive ? styles.active : ""}`}
        >
            <div
                style={{
                    transform: `translateX(-${currentInd * 1065}px)`,
                    transition: `${transition ? "all 0.6s ease" : "none"}`,
                }}
                className={styles.banner__row}
            >
                {copyData.map((data, ind) => {
                    return (
                        <img
                            key={ind}
                            src={data.img}
                            alt=""
                        />
                    )
                })}
            </div>
            {/* кнопки */}
            <div className={styles.banner__btns}>
                <button
                    onClick={prevSlide}
                    className={styles.banner__left}
                >
                    <img
                        src="/images/svg/arrowLeft.svg"
                        alt=""
                    />
                </button>
                <button
                    onClick={nextSlide}
                    className={styles.banner__right}
                >
                    <img
                        src="/images/svg/arrowRight.svg"
                        alt=""
                    />
                </button>
            </div>
        </div>
    )
}

export default Banner
