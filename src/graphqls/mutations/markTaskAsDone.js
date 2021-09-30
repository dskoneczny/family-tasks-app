import { gql } from '@apollo/client'

export const MARK_TASK_AS_DONE = gql`
  mutation($id: String!) {
    markTaskAsDone(id: $id) {
      done
      title
    }
  }
`


