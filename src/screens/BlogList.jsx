import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext';

const BlogList = ({ navigation }) => {
  const { data, dispatch } = useContext(BlogContext);

  return (
    <View>
      <Button
        title='Blog List'
        onPress={() =>
          dispatch({ type: 'ADD' })
          // navigation.navigate('Create')
        }
      />
      <FlatList
        data={data}
        keyExtractor={(blogpost) => blogpost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

export default BlogList;

const styles = StyleSheet.create({})