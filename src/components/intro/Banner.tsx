import { isTrue, isFalse } from "../../reducers/isActiveSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import { useEffect, useRef, useState } from "react"
import styles from "../../css/Intro.module.css"
import bannerData from "../../data/bannerData"

function Banner() {
    const [currentInd, setcurrentInd] = useState(1)

    const dispatch = useDispatch()
    const isActive = useSelector(
        (state: RootState) => state.active.isActiveValue
    )
    const copyData = [
        bannerData[bannerData.length - 1],
        ...bannerData,
        bannerData[0],
    ]
    const [transition, setTransition] = useState(true)

    // showbtns
    const handleEnter = (): void => {
        dispatch(isTrue())
    }
    const handleLeave = (): void => {
        dispatch(isFalse())
    }

    // const clearBannerInterval = () => {
    //     clearInterval(interv)
    //     interv = setInterval(() => changeSlide(currentInd + 1), 2300)
    // }

    // bannerSlider
    const changeSlide = (index: number): void => {
        if (index == 0) {
            setcurrentInd(index)
            setTimeout(() => {
                setcurrentInd(copyData.length - 2)
                setTransition(false)
            }, 300)
            setTransition(true)
        } else if (index >= copyData.length - 1) {
            setcurrentInd(index)
            setTimeout(() => {
                setcurrentInd(1)
                setTransition(false)
            }, 300)
            setTransition(true)
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

    console.log(currentInd)
    // let interv: any

    // const clearBanner = () => {
    //     // clearInterval(interv)
    //     setTimeout(() => {
    //         interv = setInterval(nextSlide, 2000)
    //     }, 2000)
    // }

    // useEffect(() => {}, [currentInd])

    return (
        <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`${styles.banner} ${isActive ? styles.active : ""}`}
        >
            <div
                style={{
                    transform: `translateX(-${currentInd * 100}%)`,
                    transition: `${transition ? "all 0.3s ease" : "none"}`,
                }}
                className={styles.banner__row}
            >
                {copyData.map((data, ind) => {
                    return (
                        <div
                            key={ind}
                            className={styles.banner__gallery}
                        >
                            <img
                                src={data.img}
                                alt=""
                            />
                        </div>
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
