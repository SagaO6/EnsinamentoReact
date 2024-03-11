import './App.css'
import Descricao from './components/Descricao/Descricao';
import Descricao2 from './components/Descricao2/Descricao2';
import Descricao3 from './components/Descricao3/Descricao3'
import Header from './components/Header/header';
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([

    {

      path: "/", //rota da url
      element: <Home/> //componente a ser exibido

    },

    {

      path: "/desc-Sans",
      element: <Descricao />

    },

    {

      path: "/desc-Papyrus",
      element: <Descricao2 />

    },

    {

      path: "/desc-Flowey",
      element: <Descricao3 />

    }

  ])


  return (

    <div>

      <RouterProvider router={router}/>

    </div>

  )
}

export default App
