// Estado inicial
const initialState = {
    data: [],
    loading: false,
    error: null,
};

// Acciones
export const SET_LOADING_START = 'SET_LOADING_START';

// Action Creators


// Thunk para la solicitud asíncrona


// Reducer tradicional con switch
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        default:
            return state;
    }
};

export default usersReducer;
