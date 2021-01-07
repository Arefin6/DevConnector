import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { profileSingleReducer, profilesReducer } from './reducers/profileReducer';

const reducer = combineReducers({
   profilesAll:profilesReducer,
   profileDetails:profileSingleReducer
})



const initialState = {

}
const middleware = [thunk]

const store = createStore(

    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
)

export default store