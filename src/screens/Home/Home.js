import { useQuery } from '@apollo/client'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { Loading } from '../../components/Loading/Loading'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { SingleTask } from '../../components/SingleTask/SingleTask'
import { GET_ALL_TASKS } from '../../graphqls/queries/getAllTasks'
import { AddNewTask } from './AddNewTask'
import { FlatListStyled, TasksContainer } from './styled'

export const Home = () => {
  const { data, loading: isLoading } = useQuery(GET_ALL_TASKS)

  return (
    <ScreenContainer>
      <AddNewTask />
      <View>
        {isLoading && <Loading />}
        {!isLoading && (
          <TasksContainer>
            <FlatListStyled
              data={[...data.tasks].reverse()}
              keyboardShouldPersistTaps="always"
              renderItem={({ item }) => <SingleTask task={item} />}
              keyExtractor={(task) => task.id}
            />
            <KeyboardSpacer />
          </TasksContainer>
        )}
      </View>
    </ScreenContainer>
  )
}