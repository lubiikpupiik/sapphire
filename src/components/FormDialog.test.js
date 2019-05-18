
import React from 'react'
import FormDialog from './FormDialog'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Formik } from 'formik'
import { shallow } from 'enzyme'

describe('FormDialog component', () => {
  let wrapper
  const props = {
    title: 'Title',
    fields: [
      { name: 'name' },
      { name: 'name2' },
      { name: 'name3' }
    ],
    send: jest.fn(),
    open: true,
    handleClose: jest.fn(),
    validationSchema: {},
    initialValues: { name: 'value', name2: 'value2', name3: 'value3' },
    errors: { name: 'error', name2: 'error2', name3: 'error3' },
    loading: true
  }

  beforeEach(() => {
    wrapper = shallow(<FormDialog {...props} />).dive()
  })

  it('should render title in dialog title component', () => {
    const dialogTitle = wrapper.find(DialogTitle)
    expect(dialogTitle.props().children).toBe(props.title)
  })

  it('should render expected count of textFields', () => {
    const textFields = wrapper.find(Formik).dive().find(TextField)
    expect(textFields.length).toBe(props.fields.length)
  })

  it('should call send function after submit form', () => {
    wrapper.find(Formik).props().onSubmit()
    expect(props.send.mock.calls.length).toBe(1)
  })

  it('should has expected open prop', () => {
    expect(wrapper.find(Dialog).props().open).toBe(props.open)
  })

  it('should call handleClose after button Click', () => {
    const preventDefault = jest.fn()
    const closeButton = wrapper.find(Formik).dive().find(DialogActions).dive().find(Button).at(1)
    closeButton.props().onClick({ preventDefault })
    expect(props.handleClose.mock.calls.length).toBe(1)
    expect(preventDefault.mock.calls.length).toBe(1)
  })

  it('should add initialValues to textFields', () => {
    const textFields = wrapper.find(Formik).dive().find(TextField)
    const { initialValues } = props
    expect(textFields.at(0).props().value).toBe(initialValues.name)
    expect(textFields.at(1).props().value).toBe(initialValues.name2)
    expect(textFields.at(2).props().value).toBe(initialValues.name3)
  })

  it('should add initialValues to textFields', () => {
    const textFields = wrapper.find(Formik).dive().find(TextField)
    const { errors } = props
    expect(textFields.at(0).props().helperText).toBe(errors.name)
    expect(textFields.at(1).props().helperText).toBe(errors.name2)
    expect(textFields.at(2).props().helperText).toBe(errors.name3)
  })

  it('should show loader when loading prop is true', () => {
    const isDisplayed = wrapper.exists(CircularProgress)
    expect(isDisplayed).toBe(true)
  })
})