
import { connect } from 'react-redux'
import CreateProjectDialog from '../components/CreateProjectDialog'
import { postProjectRequest, changeProjectsErrors } from '../actions/projects'
import { changeModal } from '../actions/modal'

export const mapStateToProps = state => ({
  open: state.modal === 'createProject',
  errors: state.projects.errors,
  loading: state.projects.loading
})

export const mapDispatchToProps = dispatch => ({
  send: values => dispatch(postProjectRequest(values)),
  handleClose: () => dispatch(changeModal('')),
  changeErrors: () => dispatch(changeProjectsErrors({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectDialog)