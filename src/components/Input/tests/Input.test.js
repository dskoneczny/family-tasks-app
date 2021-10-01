import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'

import { Input } from '../Input'

test('input value change', async () => {
  const onPressMock = jest.fn();
  const expectedText = "new content"
  const { getByPlaceholderText, toJSON } = render(
    <Input
      inputProps={{
        value: "",
        placeholder: 'Placeholder',
        onChangeText: onPressMock,
      }}
    />)

  fireEvent.changeText(getByPlaceholderText('Placeholder'), expectedText);
  expect(onPressMock).toHaveBeenCalledWith(expectedText);

  expect(toJSON()).toMatchSnapshot()
})

test('default input value', async () => {
  const onPressMock = jest.fn();

  const { toJSON } = render(
    <Input
      inputProps={{
        value: "Default Value",
        placeholder: 'Placeholder',
        onChangeText: onPressMock,
      }}
    />)


  expect(toJSON()).toMatchSnapshot()
})