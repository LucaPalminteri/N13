import React from 'react'

function SingleProduct({ params, searchParams }: {
    params: { slug: string },
    searchParams: { id: string },
  }) {

    console.log(params);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct