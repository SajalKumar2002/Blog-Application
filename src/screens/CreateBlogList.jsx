import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CreateBlogList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Submit = () => {
    console.log(title+","+content)
  }

  return (
    <View style={styles.screenStyle}>
      <Text style={styles.headStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        value={title}
        onChangeText={(newTitle) => {
          setTitle(newTitle)
        }}
      />
      <Text style={styles.headStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='sentences'
        autoCorrect={false}
        value={content}
        onChangeText={(newContent) => {
          setContent(newContent)
        }}
      />
      <Button
        title='Save'
        style={styles.saveButtonStyle}
        onPress={() => {
          Submit();
        }}
      />
    </View>
  )
}

export default CreateBlogList

const styles = StyleSheet.create({
  screenStyle: {
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,

  },
  headStyle: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  saveButtonStyle: {

  }
})