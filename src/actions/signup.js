import {
	POST_USER, VERIFY_USER
} from '../config'

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export function submitForm(email, password){
	return {
		types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL],
		payload: {
			request: {
                url: POST_USER,
                method: 'POST',
                data: {
                  email: email,
                  password: password,
                }
			},
		},
	}
}

export const VERIFY_CODE = 'VERIFY_CODE';
export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS';
export const VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL';

export function submitCode(code){
	return {
		types: [VERIFY_CODE, VERIFY_CODE_SUCCESS, VERIFY_CODE_FAIL],
		payload: {
			request: {
                url: VERIFY_USER,
                method: 'POST',
                data: {
                  code: code,
                }
			},
		},
	}
}