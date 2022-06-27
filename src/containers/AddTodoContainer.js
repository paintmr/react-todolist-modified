import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo'
import { setTodoText, addTodo, setAlertFlag, setAlertMsg } from '../actions'

const mapStateToProps = (state) => ({
  text: state.text,
  todolist: state.todos.data
})

const mapDispatchToProps = (dispatch) => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text)),
  setAlertFlag: alertFlag => dispatch(setAlertFlag(alertFlag)),
  setAlertMsg: alertMsg => dispatch(setAlertMsg(alertMsg))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)