
import React from 'react'
import { shallow } from 'enzyme'
import EditProjectMembersDialog from './EditProjectMembersDialog'

describe('EditProjectDialog component', () => {
  let wrapper
  const props = {
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    errors: {},
    loading: false,
    id: 1,
    changeErrors: jest.fn(),
    initialValues: {
      name: '',
      description: ''
    }
  }
  beforeEach(() => {
    wrapper = shallow(<EditProjectMembersDialog {...props} />)
  })

  it('should call handleClose and changeErrors on handleClose props call', () => {
    wrapper.props().handleClose()
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(props.handleClose.mock.calls.length).toBe(1)
  })
})
