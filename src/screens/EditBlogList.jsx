import React, { useContext } from 'react';

import BlogPostForm from '../components/BlogPostForm';
import BlogContext from '../context/BlogContext';

const EditBlogList = ({ route, navigation }) => {
  const { id } = route.params;
  const { data, dispatch } = useContext(BlogContext);

  const BlogPost = data.find(
    blogPost => blogPost.id === id
  );

  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => {
        dispatch({ type: 'EDIT', payload: { title: title, content: content, id } })
        navigation.pop();
      }}
    />
  )
}

export default EditBlogList;
