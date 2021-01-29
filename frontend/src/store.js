import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { profileAddEducation, profileAddExpReducer, profileCreateReducer, profileCurrentReducer, profileDeleteEducation, profileDeleteExperience, profileDetailsReducer, profilesReducer, profileUpdateReducer } from './reducers/profileReducer';
import { loginReducer, registerReducer } from './reducers/userReducer';
import { commentAddReducer, commentDeleteReducer, postAddLikeReducer, postAllReducer, postCreateReducer, postDeleteReducer, postSingleReducer, postUnLikeReducer } from './reducers/postReducer';


const reducer = combineReducers({
    profilesAll:profilesReducer,
    profileDetails:profileDetailsReducer,
    userLogin:loginReducer,
    userRegister:registerReducer,
    profileCurrent:profileCurrentReducer,
    profileCreate:profileCreateReducer,
    profileUpdate:profileUpdateReducer,
    profileAddExp:profileAddExpReducer,
    profileAddEdu:profileAddEducation,
    profileDeleteEdu:profileDeleteEducation,
    profileDeleteExp:profileDeleteExperience,
    postCreate:postCreateReducer,
    postAll:postAllReducer,
    postDelete:postDeleteReducer,
    postLike:postAddLikeReducer,
    postUnLike:postUnLikeReducer,
    postSingle:postSingleReducer,
    commentAdd:commentAddReducer,
    commentDelete:commentDeleteReducer
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