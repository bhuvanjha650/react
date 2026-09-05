import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
// const [data, setData] = useState({})
// useEffect(() => {
//     fetch('https://api.github.com/users/bhuvanjha650')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
   <div>
     <div className="text-center bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}  </div>
    <div />
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">Github following: {data.following}  </div>
    <img className="mx-auto mt-4 rounded-full" src={data.avatar_url} alt="Github Avatar" />

   </div>
   
    
  )
}

export default Github
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/bhuvanjha650');
  const data = await response.json();
  return data;
}