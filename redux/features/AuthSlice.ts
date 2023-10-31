import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//set up types for initial state and value
type initialState = {
    value: AuthState,
}

type AuthState = {
    isAuth: boolean,
    username: string,
    uid: string,
    isModerator: boolean
}

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    } as AuthState,
} as initialState;

export const AuthSlice = createSlice({
    name: '',
    initialState: initialState,
    reducers : {
        logOut: () => {
            initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: 'scsdj433j',
                    isModerator: false,
                }
            };
        },
    }
})

export const {logIn, logOut} = AuthSlice.actions;
export default AuthSlice.reducer;