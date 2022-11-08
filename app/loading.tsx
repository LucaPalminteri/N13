// loading.tsx: An optional file used to create loading UI for a specific part of an app. 
// It automatically wraps a page or child layout in a React Suspense Boundary, showing your loading component immediately on the first load and when navigating between sibling routes.
// React Suspense Boundary => https://beta.reactjs.org/apis/react/Suspense#suspense

import React from 'react'

function loading() {
  return (
    <div>loading</div>
  )
}

export default loading