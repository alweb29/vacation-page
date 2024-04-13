import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ResrvationPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {path: '/', 
  element: <Root/>,
  children:[
    {path: 'home', element: <HomePage/>},
    {path: 'reservation', element: <ReservationPage/>}
  ]}
])

function App() {
  //http://www.apartamentymagellan.pl/kontakt
  //http://www.zefir-rowy.com/apartamenty-w-rowach.html

  return <RouterProvider router={router}/>;
}

export default App;
