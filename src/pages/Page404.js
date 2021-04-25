import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Link to='/'>
            <button>Back Home</button>
          </Link>
        }
      />
    </div>
  )
}

export default Page404
