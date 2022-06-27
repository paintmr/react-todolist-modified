import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE, SET_ALERT_STATUS, SET_ALERT_MSG } from "./actionTypes"

let nextTodoId = 0;

const fetchTodoRequest = () => ({
  type: FETCH_TODO_REQUEST
})

const fetchTodoSuccess = (data) => ({
  type: FETCH_TODO_SUCCESS,
  data
})

const fetchTodoFailute = (error) => ({
  type: FETCH_TODO_FAILURE,
  error
})

// 异步action返回函数而非js对象。此函数可接收store的dispatch方法。
export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());
    // fetch("./api/static/todos.json").then(
    // fetch("https://upload-pic-and-todolist-server.herokuapp.com/static/todos.json").then(
    fetch("./mock/todos.json").then(
      // fetch("./mock/todos-longlist.json").then(
      response => {
        response.json().then(data => {
          dispatch(fetchTodoSuccess(data));
        })
      },
      error => {
        dispatch(fetchTodoFailute(error));
        console.log("An error occurred:" + error)
      }
    )
  }
}

/**
 * 新增待办事项
 * @param {*} text
*/
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

/**
 * 新增待办事项状态
 * @param {*} text
*/
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

/**
 * 设置过滤状态
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

/**
 * 设置新增待办事项文本
 * @param {*} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})

/**
 * 设置是否弹出警示框
 * @param {*} alert
 */
export const setAlertFlag = alertFlag => ({
  type: SET_ALERT_STATUS,
  alertFlag
})

/**
 * 设置警示框文字
 * @param {*} alert
 */
export const setAlertMsg = alertMsg => ({
  type: SET_ALERT_MSG,
  alertMsg
})


