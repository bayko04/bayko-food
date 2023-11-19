import { isActiveState } from "../reducers/isActive"
import { searchState } from "../reducers/serach"

export interface RootState {
    active: isActiveState
    search: searchState
}
