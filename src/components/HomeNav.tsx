import { Box } from '@mui/system'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  items: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

const HomeNav = ({ items, page, setPage }: Props) => {
  const itemsArr = Array(items).fill(0)

  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        right: 80,
        top: '50%',
        transform: `translateY(-50%) ${!page ? 'translateX(85px)' : ''}`,
        zIndex: 10,
        width: 5,
        transition: '0.5s',
      }}
    >
      {itemsArr.map((_, index) => (
        <Box
          key={index}
          sx={{
            height: 80,
            background: page === index ? 'theme.palette.primary.main' : 'theme.palette.divider',
            marginY: '3px',
            opacity: page === index ? 1 : 0.5,
            cursor: 'pointer',
            transition: '0.5s',
          }}
          onClick={() => setPage(index)}
        />
      ))}
    </Box>
  )
}

export default HomeNav
