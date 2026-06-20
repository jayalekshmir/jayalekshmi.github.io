import {createSlice} from "@reduxjs/toolkit";

import { projects, navigation, socialLinks } from "../../models/user";
const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Jayalekshmi R",
        email: "jayalekshmirajeswarijoy@gmail.com",
        currentCompany: "Accenture Song",
        location: "Bangalore, India",
        bio: "A passionate Software Developer building modern web experiences with React, Angular, Vue, Java Spring Boot and performance-first principles.",
        projects: projects,
        navigation: navigation,
        socialLinks: socialLinks
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        updateBio: (state, action) => {
            state.bio = action.payload;
        },
    }
})

export const { updateName, updateEmail, updateLocation, updateBio } = userSlice.actions;

export default userSlice.reducer;