import {configureStore} from "@reduxjs/toolkit";
import dashboard from "./dashboard";
import apiMiddleware from "./middleware/apiMiddleware";

export default configureStore({
    reducer: {
        dashboardReducer: dashboard
    },
    middleware: [apiMiddleware]
});