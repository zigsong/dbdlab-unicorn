import { ADD_RATE, Unicorn, UnicornActionTypes } from './types'; 


export function addProgressRate(progressRate: Unicorn): UnicornActionTypes {
    return {
        type: ADD_RATE,
        payload: progressRate
    }
}