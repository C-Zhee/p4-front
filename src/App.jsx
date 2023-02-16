import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SneakerCard from "./SneakerCard"
import Favorite from "./Favorite"
import Login from "./Login"

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

  const addSneaker = (movie) => {
    if (favorite.includes(movie)) return;
    setFavorite([...favorite, movie])
  }

  const deleteSneaker = (movie) => {
    setFavorite(favorite.filter(x => x !== movie))
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
      path: '/sneakercard',
      element: < SneakerCard sneakers={sneakers} addSneaker={addSneaker} />
    },
    {
      path: '/favorite',
      element: < Favorite favorite={favorite} deleteSneaker={deleteSneaker} />
    }
    // ,
    // {
    // maybe add another route in here! :]
    // }
  ])




  return (
    <div>  
      <RouterProvider router={router} />
    </div>
  )
}

export default App
