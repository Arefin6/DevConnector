import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { profileCurrentReducer, profileDetailsReducer, profilesReducer } from './reducers/profileReducer';
import { loginReducer, registerReducer } from './reducers/userReducer';


const reducer = combineReducers({
    profilesAll:profilesReducer,
    profileDetails:profileDetailsReducer,
    userLogin:loginReducer,
    userRegister:registerReducer,
    profileCurrent:profileCurrentReducer
})


const userInfoFromLs = localStorage.getItem('userInfo') ? JSON.parse( localStorage.getItem('userInfo')):null

const initialState = {
 userLogin:{userInfo:userInfoFromLs}
}
const middleware = [thunk]

const store = createStore(

    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
)

export default store;