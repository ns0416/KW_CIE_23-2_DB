import { REGISTER_USER, LOGIN_USER,IS_LOGGED } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER: //action이 REGISTER_USER 일떄 action의 payload의 값을 loginSucess 변수에 저장
        return { ...state, Success: action.payload };
    case LOGIN_USER:
        return { ...state, loginSuccess: action.payload };
    case IS_LOGGED:
        return { ...state, rcvd_data: action.payload};
    default:
        return state;
  }
}