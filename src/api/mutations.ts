import { gql } from "../__generated__";

export const LOGIN = gql(`
  mutation Login($username: String!, $pass: String!) {
  login(username: $username, password: $pass) {
    username
    password
    token
  }
}
`);