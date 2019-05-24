
import React from 'react'
import PropTypes from 'prop-types'
import FormDialog from './FormDialog'
import { PutUsers } from '../validation/users'

const fields = [
  {
    name: 'name'
  },
  {
    name: 'email'
  }
]

export const EditProfileDialog = ({ open, handleClose, errors, send, loading, changeErrors, initialValues, id }) => {
  return (
    <FormDialog
      title="Edit Profile"
      fields={fields}
      send={values => send(values, { id })}
      open={open}
      handleClose={() => {
        changeErrors()
        handleClose()
      }}
      validationSchema={PutUsers}
      initialValues={initialValues}
      errors={errors}
      loading={loading}
    />
  )
}

EditProfileDialog.propTypes = {
  send: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  changeErrors: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  id: PropTypes.number
}

export default EditProfileDialog