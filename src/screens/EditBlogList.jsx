import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react';
import BlogContext from '../context/BlogContext';

const EditBlogList = ({ route, navigation }) => {
  const { data, dispatch } = useContext(BlogContext);
  const { id } = route.params;

  const editBlog = data.find((blog) => blog.id === id)
  const [title, setTitle] = useState(editBlog.title)
  const [content, setContent] = useState(editBlog.content)

  const Submit = () => {
    dispatch({
      type: 'EDIT', payload: {
        id,
        title,
        content
      }
    })
  }

  return (
    <View>
      <Text style={styles.HeadStyle}>Edit your blog post</Text>
      <View>
        <Text style={styles.headStyle}>Enter New Title:</Text>
        <TextInput
          style={styles.inputStyle}
          value={title}
          onChangeText={(newTitle) => {
            setTitle(newTitle)
          }}
        />
        <Text style={styles.headStyle}>Enter New Content:</Text>
        <TextInput
          style={styles.inputStyle}
          value={content}
          onChangeText={(newContent) => {
            setContent(newContent)
          }}
        />
      </View>
      <Button
        title='save'
        onPress={() => {
          Submit();
          navigation.navigate('Home');
        }}
      />
    </View>
  )
}

export default EditBlogList

const styles = StyleSheet.create({
  HeadStyle: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headStyle: {
    fontSize: 19,
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
})