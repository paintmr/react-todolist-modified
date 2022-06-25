import { connect } from 'react-redux';
import FilterSetter from '../components/FilterSetter'
import { setFilter } from '../actions'

const mapStateToProps = (state) => ({
  filter: state.filter
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSetter)