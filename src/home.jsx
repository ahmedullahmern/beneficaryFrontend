import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <h1 class="text-3xl text-center mt-24 font-bold underline">
        Hello world!
      </h1>
      <Link to={"/ahmed"}>Go Ahmed</Link>
    </>
  )
}

export default Home
