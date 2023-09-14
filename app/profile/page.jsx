'use client'

import { useState,useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Profile from "@components/Profile"

const MyProfile = () => {
  const [myPosts, setMyPosts] = useState([])
  const {data : session} = useSession()

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
          console.log(data);
          setMyPosts(data);
        };

        if (session?.user.id){
          fetchPosts()
        }
        fetchPosts();
      }, []);
    
      const handleEdit = () => {

      }
      const handleDelete= () => {

      }
      


  return (
    <Profile
    name='My'
    desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
    data={myPosts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
  )
}

export default MyProfile