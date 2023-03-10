import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import NewsPage from "./routes/NewsPage";
import UserPage from "./routes/UserPage";
import ActivityPage from "./routes/ActivityPage";
import CreateActivityPage from "./routes/CreateActivityPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/nyheter",
		element: <NewsPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dinside",
		element: <UserPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/aktivitet",
		element: <ActivityPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/opprett-aktivitet",
		element: <CreateActivityPage />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
