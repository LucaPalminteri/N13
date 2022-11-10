import React from 'react'
import axios from 'axios';
import Image from 'next/image';

const getData = async () => {
    let { data } = await axios.get(`http://localhost:3000/api/tshirts`)
    return data;
  }

async function SingleProduct({ params, searchParams }: {
    params: { id: string  },
    searchParams: { id: string },
  }) {

  let data = await getData()

  let [aux] = data.filter((product:any) => product.id == params.id)


    console.log(aux);

  return (
    <div className='single-product'>
      <h2>{aux.title}</h2>
      <Image src={aux.url_img} width={300} height={400} alt={aux.title}/>
      <h3>{aux.price}</h3>
    </div>
  )
}

export default SingleProduct