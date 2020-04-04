import { combineReducers } from 'redux';
import unicornReducer from '../reducers/unicornReducer';

const rootReducer = combineReducers({
    unicornReducer
});

export default rootReducer;

// 추후 컴포넌트에서 useSelector 이용 시 필요
export type RootState = ReturnType<typeof rootReducer>;