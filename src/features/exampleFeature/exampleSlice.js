// Estado inicial
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// Acciones
const FETCH_EXAMPLE_DATA_REQUEST = 'FETCH_EXAMPLE_DATA_REQUEST';
const FETCH_EXAMPLE_DATA_SUCCESS = 'FETCH_EXAMPLE_DATA_SUCCESS';
const FETCH_EXAMPLE_DATA_FAILURE = 'FETCH_EXAMPLE_DATA_FAILURE';

// Action Creators
export const fetchExampleDataRequest = () => ({
    type: FETCH_EXAMPLE_DATA_REQUEST,
});

export const fetchExampleDataSuccess = (data) => ({
    type: FETCH_EXAMPLE_DATA_SUCCESS,
    payload: data,
});

export const fetchExampleDataFailure = (error) => ({
    type: FETCH_EXAMPLE_DATA_FAILURE,
    payload: error,
});

// Thunk para la solicitud asíncrona
export const fetchExampleData = () => async (dispatch) => {
    dispatch(fetchExampleDataRequest());

    try {
        // Simulación de una llamada API
        const response = await fetch('/api/example');
        const data = await response.json();

        dispatch(fetchExampleDataSuccess(data));
    } catch (error) {
        dispatch(fetchExampleDataFailure(error.toString()));
    }
};

// Reducer tradicional con switch
export const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EXAMPLE_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_EXAMPLE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FETCH_EXAMPLE_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default exampleReducer;
