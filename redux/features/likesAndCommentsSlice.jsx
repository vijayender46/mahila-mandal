import { createSlice } from '@reduxjs/toolkit';


const likesAndCommentsSlice = createSlice({
    name: 'likesAndCommentsSlice',
    initialState: {
        likes: 0,
        comments: [],
    },
    reducers: {
        incrementLikes: (state) => {
            state.likes += 1;
        },
        addComment: (state, action) => {
            state.comments.push(action.payload);
        }
    }
})

export const {incrementLikes, addComment} = likesAndCommentsSlice.actions;
export default likesAndCommentsSlice.reducer;