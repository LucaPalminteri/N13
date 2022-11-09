import React from 'react'

function loading() {

    let data = [1,2,3,4,5,6,7,8,9,10] 

    let arrProducts = data.map((product:any,index:number) => {
        return (
          <div className='card' key={index}>
            <h4>Loading</h4>
            <h5>Loading</h5>
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
        {arrProducts}
      </main>
    </div>
  )
}

export default loading