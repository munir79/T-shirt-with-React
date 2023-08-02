import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Header/Layout/Main';
import Home from './Component/Home';
import Orders from './Component/Orders';

function App() {
  const router=createBrowserRouter([

    {
      path:'/',
    element:<Main></Main>, 
      children:[
        {
          path:'/home',
          loader:()=>{
          return fetch('tshirts.json');
          },
          element:<Home></Home>
        },
        {
          path:'/order',
          element:<Orders></Orders>
        }
      ]
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
