import {
    TOGGLE_SIGNUP_DRAWER,
    TOGGLE_LOGIN_DRAWER,
    REGISTER_INQUIRY,
    FAILED_INQUIRY_REQUEST,
    REQUEST,
    CLEARING_PROPS,
    TOGGLE_MODAL,
    TOGGLE_CONTACT_US_DRAWER
} from './userType'
import { MakeRequest } from '../../utils/apiHitHelpers';

export const toggleModal = (value) => (dispatch) => {
    dispatch({
        type:TOGGLE_MODAL,
        payload:value
    })
}

export const clearProps = () => (dispatch) => {
    dispatch({
        type:CLEARING_PROPS,
        payload:true
    })
}

export const toggleSignupDrawer = (open) => (dispatch) => {
    dispatch({
        type:TOGGLE_SIGNUP_DRAWER,
        payload:open
    })
}

export const toggleContactUsDrawer = (open) => (dispatch) => {
    dispatch({
        type:TOGGLE_CONTACT_US_DRAWER,
        payload:open
    })
}

export const toggleLoginDrawer = (open) => (dispatch) => {
    dispatch({
        type:TOGGLE_LOGIN_DRAWER,
        payload:open
    })
}

export const registerInquiry = (data) => (dispatch) => {
    dispatch({
        type: REQUEST,
        payload: true
    });
    let succFunc = (res) => {
        dispatch({
            type: REGISTER_INQUIRY,
            payload: {user: res.data.data} 
        });
    };
    let failureFunc = (err) => {
        dispatch({
            type: FAILED_INQUIRY_REQUEST,
            payload: err.response.data
        });
    };
    MakeRequest.post("/public/register-inquiry",data, succFunc, failureFunc);
}
