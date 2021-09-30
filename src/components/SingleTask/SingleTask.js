import React from 'react'
import { View, Text} from 'react-native'
import { useQuery, useMutation } from '@apollo/client'
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { MARK_TASK_AS_DONE } from '../../graphqls/mutations/markTaskAsDone'
import { MARK_TASK_AS_UN_DONE } from '../../graphqls/mutations/markTaskAsUnDone';
import { Container } from './styled'
import { Colors } from '../../lib/colors';

export const SingleTask = (props) => {
  const { task: {id, title, done} } = props
  const [markTaskAsDone] = useMutation(MARK_TASK_AS_DONE);
  const [markTaskAsUnDone] = useMutation(MARK_TASK_AS_UN_DONE);

  const handleOnPress = (isDone) => {
    const data = { variables: { id } }

    isDone
      ? markTaskAsDone(data)
      : markTaskAsUnDone(data)
  }
  return (
    <Container>
      <BouncyCheckbox
        isChecked={done}
        size={25}
        fillColor={Colors.accent}
        unfillColor={Colors.white}
        text={title}
        iconStyle={{ borderColor: Colors.accent }}
        onPress={handleOnPress}
      />
    </Container>
  )
}
