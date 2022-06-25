import { ADD_TODO, TOGGLE_TODO, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from "../actions/actionTypes"

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

/** 这个todoreducer处理所有和todoList相关的数据，包括从服务器获取todoList */
const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default: {
      return {
        ...state,
        data: todos(state.data, action)
      }
    }
  }
}

/** 这个子reducer只处理用户对todoList的操作 */
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id ? {
          ...todo, completed: !todo.completed
        } : todo
      })
    default:
      return state
  }
}

export default todoreducer