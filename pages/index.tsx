import type { NextPage } from 'next'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  const logoClickHandler = () => {}
  return (
    <>
      <Header logo={false} click={logoClickHandler} />
    </>
  )
}

export default Home
