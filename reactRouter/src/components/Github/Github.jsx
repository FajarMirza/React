// https://github.com/FajarMirza

import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
const data = useLoaderData()
    return(
<>
            <div className='text-center m-4 bg-orange-100 text-black/70 p-4 text-3xl'>Name: {data.login}
    <img className="mx-auto mt-4" src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
    )
}

export const gitInfoLoader=async()=>{
    const res = await fetch('https://api.github.com/users/FajarMirza');
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub data");
  }
  return res.json();

}