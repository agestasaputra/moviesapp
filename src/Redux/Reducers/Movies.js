import { FETCH_ALL_MOVIES, FETCH_DETAIL_MOVIES } from '../Actions/types'

const initialState = {
    data: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_MOVIES:
            return {
                ...state,
                data: action.payload,
            }
            // console.log('cek action on Reducer', action)
        
        case FETCH_DETAIL_MOVIES:
            return {
                ...state,
                detail: action.payload,
            }
            // console.log('cek action on Reducer', action)

        default:
            return state
    }
}