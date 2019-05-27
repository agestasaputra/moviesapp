import { FETCH_ALL_MOVIES, FETCH_DETAIL_MOVIES } from './types'
import axios from 'axios'

export const fetchAllMovies = (page, search) => dispatch => {

    if (page && search) {
        axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`)
        .then(data => 
            dispatch ({
                type: FETCH_ALL_MOVIES,
                payload: data.data
            }
            )
        )
        .catch(error => console.log('cek error:', error))
        return
    }

    // console.log('cek page on Action:', page)
    // console.log('cek search on Action:', search)
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=abc&type=movie&plot=full&page=${page}`)
    .then(data => 
        dispatch ({
            type: FETCH_ALL_MOVIES,
            payload: data.data
        }
        )
    )
    .catch(error => console.log('cek error:', error))
    return

    
}

export const fetchDetailMovies = (id) => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&i=${id}`)
    .then(data => 
        dispatch ({
            type: FETCH_DETAIL_MOVIES,
            payload: data.data
        }
        )
    )
    .catch(error => console.log('cek error:', error))
}
