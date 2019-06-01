
import { mapStateToProps, mapDispatchToProps } from './ProjectsContainer'
import { getProjectsRequest, deleteProjectsRequest } from '../actions/projects'
import { changeModal } from '../actions/modal'

describe('ProjectsContainer container', () => {
  it('should return mapped state props', () => {
    const state = {
      projects: {
        data: []
      }
    }
    const mappedState = mapStateToProps(state)

    expect(mappedState.items).toEqual(state.projects.data)
  })

  it('should return mapped actions props', () => {
    const dispatch = jest.fn()
    const id = 1
    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.getItems()
    mappedActions.options[0].clickHandler(id)
    mappedActions.options[1].clickHandler(id)

    expect(dispatch.mock.calls[0][0]).toEqual(getProjectsRequest())
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('editProject', { show: true, id }))
    expect(dispatch.mock.calls[2][0]).toEqual(deleteProjectsRequest({ id }))
  })
})
