import styled from 'styled-components'
import { Colors } from '../../lib/colors'

export const AddNewTaskContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`

export const AddButton = styled.Pressable`
  padding: 10px;
  background-color: ${Colors.accent};
  border-radius: 8px;
  margin-left: 10px;
`

export const TasksContainer = styled.View`
  height: 95%;
`

export const FlatListStyled = styled.FlatList`
  padding: 10px;
`