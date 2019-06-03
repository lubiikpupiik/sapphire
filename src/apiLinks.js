
const url = process.env.REACT_APP_API_URL
export const users = `${url}/users`
export const tokens = `${url}/tokens`
export const me = `${url}/me`
export const projects = `${url}/projects`
export const project = ({ id }) => `${url}/projects/${id}`
export const projectMembers = ({ id }) => `${url}/projects/${id}/members`
export const user = ({ id }) => `${url}/users/${id}`
export const passwords = `${url}/passwords`
export const avatars = `${url}/avatars`
