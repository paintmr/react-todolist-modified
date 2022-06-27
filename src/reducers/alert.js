import { SET_ALERT_STATUS, SET_ALERT_MSG } from "../actions/actionTypes"

const initialState = {
  alertFlag: 'hide',
  alertMsg: ''
}

const alert = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT_STATUS:
      return {
        ...state,
        alertFlag: action.alertFlag
      }
    case SET_ALERT_MSG:
      return {
        ...state,
        alertMsg: action.alertMsg
      }
    default:
      return state
  }
}

export default alert
