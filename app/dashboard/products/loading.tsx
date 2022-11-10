import React from 'react'
import "skeleton-screen-css";

function loading() {

    let data = [1,2,3,4,5,6,7,8,9,10] 

    let arrProducts = data.map((product:any,index:number) => {
        return (
          <div className='card card-loading' key={index}>
            <div></div>
            <h4></h4>
            <h5></h5>
            <div className='btn-container'>
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          </div>
        )
      })


  return (
    <div className='products'>
      <h1>Products</h1>
      <main>
        {/* {arrProducts} */}
        loading all products
      </main>
    </div>
  )
}

export default loading