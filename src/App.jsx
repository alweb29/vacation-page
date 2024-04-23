import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import Root from "./pages/Root";
import Neighbourhood from "./pages/Neighbourhood";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {path: '/', 
  element: <Root/>,
  children:[
    {path: '', element: <HomePage/>},
    {path: 'neighbourhood', element: <Neighbourhood/>},
    {path: 'prices', element: <Price/>},
    {path: 'reservation', element: <ReservationPage/>},
    {path: 'contact', element: <Contact/>},
    {path: 'admin', element: <AdminPage/>},
  ]}
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
