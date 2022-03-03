import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'
import Cube from '../src/components/common/Cube'
import Header from '../src/components/Header'
import HomeAbout from '../src/components/HomeAbout'
import Intro from '../src/components/Intro'

const scrollTime = 1000

const Home: NextPage = () => {
  const logoClickHandler = () => {}
  const [page, setPage] = useState(0)
  const height = useRef<number>(0)
  const disableScroll = useRef<boolean>(false)

  const handleScroll = useCallback((e: WheelEvent) => {
    setPage((page) => {
      const scrollPositive = e.deltaY > 0
      if ((scrollPositive && page > 4) || (!scrollPositive && page < 1)) return page
      if (disableScroll.current) return page
      disableScroll.current = true
      setTimeout(() => (disableScroll.current = false), scrollTime)
      if (scrollPositive) return page + 1
      else return page - 1
    })
  }, [])

  useEffect(() => {
    height.current = window.innerHeight
    document.body.style.overflowY = 'hidden'
    window.onwheel = handleScroll
    return () => {
      document.body.style.overflowY = 'auto'
      window.onwheel = null
    }
  }, [])
  return (
    <>
      <Header logo={Boolean(page)} click={logoClickHandler} />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          transform: `translateY(-${height.current * page}px)`,
          transition: `${scrollTime}ms`,
        }}
      >
        <Intro scrollClick={() => setPage(1)} />
        <HomeAbout />
      </Box>
      <Cube
        wrapperSx={{
          top: '40%',
          left: '65%',
        }}
        cubeSx={{
          transform: 'rotateZ(15deg) rotateX(35deg) rotateY(55deg)',
        }}
        size={700}
      />
    </>
  )
}

export default Home
