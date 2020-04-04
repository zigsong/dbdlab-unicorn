export const ADD_RATE = 'unicornAction/ADD_RATE'; 

export interface Unicorn {
    progressRate: number
}

interface AddRateAction {
    type: typeof ADD_RATE
    payload: Unicorn
}

export type UnicornActionTypes = 
    AddRateAction