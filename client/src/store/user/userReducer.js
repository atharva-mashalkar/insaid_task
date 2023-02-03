import {
    TOGGLE_SIGNUP_DRAWER,
    TOGGLE_LOGIN_DRAWER,
    REGISTER_INQUIRY,
    REQUEST,
    FAILED_INQUIRY_REQUEST,
    CLEARING_PROPS,
    TOGGLE_MODAL,
    TOGGLE_CONTACT_US_DRAWER
} from './userType'

const initialState = {
    openSignupDrawer:false,
    openContactUsDrawer:false,
    openLoginDrawer:false,
    failed_req : null,
    processing_reg: false,
    req_success: false,
    userInfo:null,
    modalVisible:false,
}

export default function (state = initialState, action) {
    const {type, payload} = action
    switch (type){
        case TOGGLE_CONTACT_US_DRAWER:
            return{
                ...state,
                openContactUsDrawer:payload
            };
        case TOGGLE_MODAL:
            return {
                ...state,
                modalVisible:payload
            }
        case TOGGLE_SIGNUP_DRAWER:
            return{
                ...state,
                openSignupDrawer : payload,
            };
        case TOGGLE_LOGIN_DRAWER:
            return{
                ...state,
                openLoginDrawer : payload,
            };
        case REGISTER_INQUIRY:
            return{
                ...state,
                userInfo:{...payload.user.user},
                processing_reg:false,
                req_success:true,
                failed_req:null,
            };
        case FAILED_INQUIRY_REQUEST:
            return{
                ...state,
                processing_reg:false,
                failed_req:payload
            };
        case REQUEST:
            return{
                ...state,
                processing_reg: payload,
                req_success:false,
                failed_req:null
            };
        case CLEARING_PROPS:
            return{
                ...state,
                openSignupDrawer:false,
                openContactUsDrawer:false,
                openLoginDrawer:false,
                failed_req : null,
                processing_reg: false,
                req_success: false,
                userInfo:null,
                modalVisible:false,
            };
        default:
            return state
    };
};
