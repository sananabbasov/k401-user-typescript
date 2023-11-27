import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {

  const { error, loading, todos } = useTypedSelector(state => state.products)

  const { getProducts } = useActions()

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {
    return (
      <>
        Yuklenir
      </>
    )
  }


  if (error != null) {
    return (
      <>
        Error is: {error}
      </>
    )
  }
  console.log(todos);


  return (
    <div>
      {
        error != null?
        <div>{error}</div>
        :""
      }
    </div>
  )
}

export default App