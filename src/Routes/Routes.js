import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categorie from "../Pagees/Catagory/Categorie";
import Home from "../Pagees/Home/Home";
import News from "../Pagees/News/News";
import Login from "../Pagees/LogInAndRgister/LogIn/Login";
import Register from "../Pagees/LogInAndRgister/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () =>fetch(`http://localhost:5000/news`)
        },
        {
            path:'/categorie/:id',
            element:<Categorie></Categorie>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
       ]
    }
]);