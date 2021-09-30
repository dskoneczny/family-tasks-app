import { gql } from '@apollo/client'

export const ADD_TASK = gql`
  mutation($title: String!, $description: String) {
    addTask(newTaskData: { title: $title, description: $description }) {
      id
      title
    }
  }
`


