import { gql } from '@apollo/client'

export const MARK_TASK_AS_UN_DONE = gql`
  mutation($id: String!) {
    markTaskAsUnDone(id: $id) {
      done
      title
    }
  }
`


