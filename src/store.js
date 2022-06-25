import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
// import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'
// import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


// 初始state

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
})
// console.log(store)

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(toggleTodo(0))
// store.dispatch(setFilter('active'))
// store.dispatch(setTodoText('Learn'))


//取消订阅
unsubscribe()

export default store