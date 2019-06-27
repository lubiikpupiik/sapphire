
import { mapStateToProps, mapDispatchToProps } from './ChangePasswordDialog'
import { putPasswordsRequest, changeUserErrors } from '../../actions/profile'
import { changeModal } from '../../actions/modal'

describe('ChangePasswordDialog container', () => {
  it('should return expected mapped state props', () => {
    const state = {
      modal: {
        changePassword: {
          show: true
        }
      },
      profile: {
        errors: {
          putPasswords: {}
        },
        loading: {
          putPasswords: false
        }
      }
    }

    const mappedState = mapStateToProps(state)

    expect(mappedState.open).toBe(true)
    expect(mappedState.errors).toEqual(state.profile.errors.putPasswords)
    expect(mappedState.loading).toBe(state.profile.loading.putPasswords)
  })

  it('should return expected mapped actions props', () => {
    const dispatch = jest.fn()
    const values = {
      password: 'password',
      password_confirmation: 'password'
    }

    const mappedActions = mapDispatchToProps(dispatch)

    mappedActions.send(values)
    mappedActions.handleClose()
    mappedActions.changeErrors()

    expect(dispatch.mock.calls[0][0]).toEqual(putPasswordsRequest(values))
    expect(dispatch.mock.calls[1][0]).toEqual(changeModal('changePassword', { show: false }))
    expect(dispatch.mock.calls[2][0]).toEqual(changeUserErrors('putPasswords')({}))
  })
})