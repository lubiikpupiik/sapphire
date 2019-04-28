
import { changeUserData, changeUserParam, changeUserErrors, toggleUserLoading } from '../actions/user'
import user from './user'

describe('user reducer', () => {
  const state = {
    data: {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com'
    },
    errors: {},
    loading: false
  }

  it('defaul state', () => {
    const expectedValue = {
      data: {
        id: null,
        name: '',
        email: ''
      },
      errors: {},
      loading: false
    }
    expect(user(undefined, {})).toEqual(expectedValue)
  })

  it('change user data', () => {
    const data = {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@doe.com'
    }
    const newState = { ...state, data }
    expect(user(undefined, changeUserData(data))).toEqual(newState)
  })

  it('change user param', () => {
    const key = 'name'
    const value = 'john'
    const data = { ...state.data, [key]: value }
    const newState = { ...state, data }
    expect(user(state, changeUserParam(key, value))).toEqual(newState)
  })

  it('change user errors', () => {
    const errors = {
      name: 'error',
      email: 'error',
      password: 'error',
      password_confirmation: 'error'
    }
    const newState = { ...state, errors }
    expect(user(state, changeUserErrors(errors))).toEqual(newState)
  })

  it('toggle user loading', () => {
    const newState = { ...state, loading: true }
    expect(user(state, toggleUserLoading(true))).toEqual(newState)
  })
})
