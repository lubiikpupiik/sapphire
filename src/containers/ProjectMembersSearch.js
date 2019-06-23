
import { connect } from 'react-redux'
import SearchContainer from '../components/SearchContainer'
import { getUsersRequest } from '../actions/users'
import { getProjectMembersRequest, editProject } from '../actions/projects'
import { getItem } from '../reducers/selectors'

export const mapStateToProps = state => {
  const project = getItem(state.projects.data, state.modal.editProjectMembers.id)
  return {
    loading: state.projects.loading,
    items: state.users.data,
    selectedItems: project.members || [],
    id: project.id
  }
}

export const mapDispatchToProps = dispatch => ({
  getSelectedItems: id => dispatch(getProjectMembersRequest({ id })),
  search: name => dispatch(getUsersRequest(name)),
  changeSelectedItems: (id, members) => dispatch(editProject(id, { members }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
