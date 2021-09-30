import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Alert, Text } from 'react-native'
import { Input } from '../../components/Input/Input'
import { ADD_TASK } from '../../graphqls/mutations/addTask'
import { AddButton, AddNewTaskContainer } from './styled'

export const AddNewTask = () => {
  const [inputValue, setInputValue] = useState("")
  const [addTask] = useMutation(ADD_TASK, {
    onError: (error) => {
      Alert.alert(error.message)
    },
    onCompleted: () => {
      setInputValue("")
    },
    refetchQueries: [
      'getAllTasks'
    ]
  })

  const handleOnPress = async () => {
    addTask({
      variables: {
        title: inputValue
      }
    })
  }

  return (
    <AddNewTaskContainer>
      <Input
        inputProps={{
          autoFocus: true,
          onChangeText: setInputValue,
          value: inputValue,
          placeholder: 'Add new task'
        }}
      />
      <AddButton onPress={handleOnPress}>
        <Text>Add</Text>
      </AddButton>
    </AddNewTaskContainer>
  )
}