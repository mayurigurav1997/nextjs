import Link from 'next/link'
import { useRouter } from 'next/router'
import UserList from './users'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href='/blog'>
        Blog
      </Link>
      <br />
      <Link href='/product'>
        Product
      </Link>
      <br />
      <Link href='/users'>
        Users
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
      {/* <UserList /> */}

    </>
  )
}

export default Home