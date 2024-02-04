import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <>
            <Text style={styles.headerStyle}>Edit your blog post</Text>
            <View>
                <Text style={styles.headStyle}>Enter New Title:</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                />
                <Text style={styles.headStyle}>Enter New Content:</Text>
                <TextInput
                    style={styles.inputStyle}
                    value={content}
                    onChangeText={(content) => setContent(content)}
                />
            </View>
            <Button
                title='SAVE'
                onPress={() => onSubmit(title, content)}
            />
        </>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    headStyle: {
        fontSize: 18,
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default BlogPostForm;