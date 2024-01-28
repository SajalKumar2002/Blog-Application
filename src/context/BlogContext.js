import React, { useReducer } from "react";

const BlogContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                { title: `Blog Posts #${state.length + 1}` }
            ]
        case 'EDIT':
            return state;
        case 'DELETE':
            return state;
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