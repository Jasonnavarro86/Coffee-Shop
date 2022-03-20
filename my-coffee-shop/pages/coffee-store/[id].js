import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter()
  console.log({ router })
  const { id } = router.query
  return (
    <>
      <div>Coffee Store: {id}
        <Link href="/"><a>Back Home</a></Link>
      </div>

    </>
  )
}

export default CoffeeStore