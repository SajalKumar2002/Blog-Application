import React, { useReducer } from "react";

const BlogContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }
            ]
        case 'EDIT':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { id: action.payload.id, title: action.payload.title, content: action.payload.content }
                }
                return item;
            })
        case 'DELETE':
            return state.filter((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                }
            })
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <BlogContext.Provider value={{ data: state, dispatch }} >
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;