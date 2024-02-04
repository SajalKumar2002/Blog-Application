import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const BlogList = ({ navigation }) => {
  const { data, dispatch } = useContext(BlogContext);
  
  useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(blogpost) => blogpost.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity style={styles.data} onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View style={{ flexDirection: 'columm' }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text>{item.content}</Text>
                </View>
                <TouchableOpacity onPress={() => dispatch({ type: 'DELETE', payload: { id: item.id } })}>
                  <Feather style={styles.icon} name='trash' />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

export default BlogList;

const styles = StyleSheet.create({
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {

    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24
  }
})