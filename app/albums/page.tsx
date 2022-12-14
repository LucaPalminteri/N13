import React from 'react'

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    return res.json();
  }

async function Photos() {
    const data = await getData();

    let arr = data.map((album:any,index:number) => <div key={index} className='card'>{album.title}</div>)


  return (
    <div className='photos-container'>
        {arr}
    </div>
  )
}

export default Photos