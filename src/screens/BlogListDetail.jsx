import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const BlogListDetail = ({ route, navigation }) => {
  const { data } = useContext(BlogContext);
  const { id } = route.params;

  const blog = data.find((blogPost) => blogPost.id === id)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
          <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View style={styles.row}>
      <Text style={styles.titleStyle}>{blog.title}</Text>
      <Text style={styles.contentStyle}>{blog.content}</Text>
    </View>
  )
}

export default BlogListDetail

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentStyle: {
    fontSize: 18,
  }
})