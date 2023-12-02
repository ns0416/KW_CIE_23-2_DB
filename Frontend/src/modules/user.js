const initialState = {
    user: {},
}

// 액션 타입
const SET_USER = 'SET_USER';

// 액션 함수
export const getToken = data => ({ type: SET_USER, data });

// 리듀서
export default function user(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
}