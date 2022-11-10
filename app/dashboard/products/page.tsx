import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
  let { data } = await axios.get(`http://localhost:3000/api/tshirts`)
  return data;
}

async function page() {
  

  let data = await getData()
  let arrProducts:any = []


  arrProducts = data.map((product:any,index:number) => {
    return (
      <div className='card' key={index}>
        <Link href={`/dashboard/products/${product.id}`}>
          <Image src={product.url_img} alt={product.title} width={180} height={250}/>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <div className='btn-container'>
            <button>Buy</button>
            <button>Add to Cart</button>
          </div>
          <span>id:{index+1}</span>
        </Link>
      </div>
    )
  })

  

  return (
    <div className='products'>
      <h1>Products</h1>
      <main>
        {arrProducts}
      </main>
    </div>
  )
}

export default page