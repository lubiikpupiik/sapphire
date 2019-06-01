
import { GET_PROJECTS_REQUEST, CHANGE_PROJECTS_DATA, CHANGE_PROJECTS_ERRORS, TOGGLE_PROJECTS_LOADING, POST_PROJECTS_REQUEST, PUSH_PROJECT, EDIT_PROJECT, REMOVE_PROJECT, PUT_PROJECTS_REQUEST, DELETE_PROJECTS_REQUEST, GET_PROJECT_MEMBERS_REQUEST, PUT_PROJECT_MEMBERS_REQUEST } from '../actionTypes/projects'

export function getProjectsRequest() {
  return {
    type: GET_PROJECTS_REQUEST
  }
}

export function changeProjectsData(data) {
  return {
    type: CHANGE_PROJECTS_DATA,
    data
  }
}

export function changeProjectsErrors(errors) {
  return {
    type: CHANGE_PROJECTS_ERRORS,
    errors
  }
}

export function toggleProjectsLoading(value) {
  return {
    type: TOGGLE_PROJECTS_LOADING,
    value
  }
}

export function postProjectRequest(payload) {
  return {
    type: POST_PROJECTS_REQUEST,
    payload
  }
}

export function pushProject(project) {
  return {
    type: PUSH_PROJECT,
    project
  }
}

export function putProjectsRequest(payload, urlParams) {
  return {
    type: PUT_PROJECTS_REQUEST,
    payload,
    urlParams
  }
}

export function editProject(id, data) {
  return {
    type: EDIT_PROJECT,
    id,
    data
  }
}

export function removeProject(id) {
  return {
    type: REMOVE_PROJECT,
    id
  }
}

export function deleteProjectsRequest(urlParams) {
  return {
    type: DELETE_PROJECTS_REQUEST,
    urlParams
  }
}

export function getProjectMembersRequest(urlParams) {
  return {
    type: GET_PROJECT_MEMBERS_REQUEST,
    urlParams
  }
}

export function putProjectMembersRequest(urlParams, payload) {
  return {
    type: PUT_PROJECT_MEMBERS_REQUEST,
    urlParams,
    payload
  }
}
