import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'

import BlogContext from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const CreateBlogList = ({ navigation }) => {
  const { dispatch } = useContext(BlogContext);

  return (
    <View style={styles.screenStyle}>
      <BlogPostForm onSubmit={(title, content) => {
        dispatch({ type: 'ADD', payload: { title: title, content: content } })
        navigation.navigate('Home')
      }} />
    </View>
  )
}

export default CreateBlogList

const styles = StyleSheet.create({
  screenStyle: {
    paddingTop: 30,
    paddingLeft: 5,
    paddingRight: 5,
  }
})