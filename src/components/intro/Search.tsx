import styles from "../../css/Intro.module.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import {
    changeInput,
    setSearchData,
    setSearchActive,
} from "../../reducers/serach"
import { useState, useEffect } from "react"
import Found from "./Found"
import foodsData from "../../data/foodsData"

function Search() {
    const dispatch = useDispatch()
    // inputState
    const searchValue = useSelector((state: RootState) => state.search.input)
    // serachDataState
    const searchData = useSelector(
        (state: RootState) => state.search.searchData
    )
    const searchActive = useSelector(
        (state: RootState) => state.search.searchActive
    )

    useEffect(() => {
        dispatch(
            setSearchData(
                foodsData.filter((el) => {
                    if (searchValue.length !== 0) {
                        return (
                            el.title
                                .slice(0, searchValue.length)
                                .toLowerCase() == searchValue.toLowerCase()
                        )
                    }
                })
            )
        )
    }, [searchValue])

    const clearSearch = (e: any) => {
        dispatch(changeInput(""))
        e.target.value = ""
    }

    return (
        <div className={styles.search}>
            <h3 className={styles.search__title}>search</h3>
            <div className={styles.search__row}>
                <div className={styles.search__svg}>
                    <img
                        src="/images/svg/search.svg"
                        alt=""
                    />
                </div>
                <input
                    onChange={(e) => dispatch(changeInput(e.target.value))}
                    onFocus={() => dispatch(setSearchActive(true))}
                    onBlur={(e) => {
                        dispatch(setSearchActive(false))
                        dispatch(setSearchData([]))
                        clearSearch(e)
                    }}
                    className={styles.search__search}
                    type="text"
                    style={{
                        border: `${
                            searchActive ? "1px solid #ff7d2e" : "none"
                        }`,
                    }}
                />
                <div
                    style={{
                        boxShadow: `${
                            searchData.length === 0
                                ? ""
                                : "-1px 4px 11px 5px rgba(0, 0, 0, 0.37)"
                        }`,
                    }}
                    className={styles.search__data}
                >
                    {searchData.map((data, ind) => {
                        return (
                            <Found
                                key={ind}
                                title={data.title}
                                img={data.img}
                                price={data.price}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search
