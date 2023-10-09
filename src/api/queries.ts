import { gql } from "../__generated__";

export const USER = gql(`
  query User {
    me {
      username
    }
  }
`);

export const GET_DASHBOARDSTAT = gql(`
query Show {
  dashboard {
    scenarios {
      active
      inactive
      completed
    }
    lists {
      active
      inactive
      completed
    }
    dialogs {
      active
      inactive
      completed
    }
  }
}`)