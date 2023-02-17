import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SneakerCard from "./SneakerCard"
import Favorite from "./Favorite"
import Login from "./Login"
import Signup from './Signup'
import Card from './Card'
import Post from './Post'

const App = () => {
  const [sneakers, setSneakers] = useState([])
  const [favorite, setFavorite] = useState([])

  useEffect(()=>{
    const request = async () => {
      let req = await fetch("http://localhost:3000/sneakers")
      let res = await req.json()
      setSneakers(res)
    }
    request()
  }, [] )

  const addSneaker = (sneaker) => {
    if (favorite.includes(sneaker)) return;
    setFavorite([...favorite, sneaker])
  }

  const deleteSneaker = (sneaker) => {
    setFavorite(favorite.filter(x => x !== sneaker))
  }

  // const handleSignUp = () => {
  //   if (!email || !password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setIsValid(true);
  //       setUser(data);
  //     })
  //     .catch((error) => {
  //       setError("An error occurred, please try again later.");
  //     });
  // };

  const router = createBrowserRouter([
    {
      path: '/',
      element: < Login />
    },
    {
      path: '/signup',
      element: < Signup />
    },
    {
      path: '/sneakercard',
      element: < SneakerCard sneakers={sneakers} addSneaker={addSneaker} />
    },
    {
      path: '/card',
      element: < Card />
    },
    {
      path: '/favorites',
      element: < Favorite favorite={favorite} deleteSneaker={deleteSneaker} />
    }
    ,
    {
      path: '/post',
      element: < Post />
    }
  ])




  return (
    <div>  
      <RouterProvider router={router} />
    </div>
  )
}

export default App
