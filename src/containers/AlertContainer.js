import { connect } from 'react-redux';
import Alert from '../components/Alert'

const mapStateToProps = (state) => ({
  alertFlag: state.alert.alertFlag,
  alertMsg: state.alert.alertMsg
})


export default connect(mapStateToProps)(Alert)