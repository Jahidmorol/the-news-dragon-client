import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import Terms from "../pages/shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-jahidmorol.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-server-jahidmorol.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
