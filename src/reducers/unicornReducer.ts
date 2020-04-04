import { ADD_RATE, Unicorn, UnicornActionTypes } from '../actions/types'; 

const initialState: Unicorn = {
    progressRate: 0
}

function unicornReducer(state = initialState, action: UnicornActionTypes): Unicorn {
    switch(action.type){
        case ADD_RATE:
            return {
                ...state,
                progressRate: state.progressRate + Math.round(100 / 15)
            }
        default:
            return state;
    }
}

export default unicornReducer;