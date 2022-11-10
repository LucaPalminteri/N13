import React from 'react'
import axios from 'axios';

const getData = async () => {
    let { data } = await axios.get(`http://localhost:3000/api/tshirts`)
    return data;
  }

async function SingleProduct({ params, searchParams }: {
    params: { slug: string },
    searchParams: { id: string },
  }) {

  let data = await getData()


    console.log(params);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct