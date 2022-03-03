import { Box, SxProps } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'

type Props = {
  size?: number
  wrapperSx?: SxProps
  cubeSx?: SxProps
}

const Cube = ({ wrapperSx, cubeSx, size = 200 }: Props) => {
  const CubeSide = styled(Box)({
    position: 'absolute',
    width: size,
    height: size,
  })

  return (
    <Box
      sx={{
        position: 'fixed',
        width: size,
        height: size,
        // was 2
        perspective: size * 4,
        transition: '0.5s',
        ...wrapperSx,
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `translateZ(${-size / 2}px)`,
          transition: '0.5s',
          ...cubeSx,
        }}
      >
        <CubeSide
          sx={{
            transform: `rotateY(0deg) translateZ(${size / 2}px)`,
            background: '#4077FF',
          }}
        />
        <CubeSide
          sx={{
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            background: '#164DF2',
          }}
        />
        <CubeSide
          sx={{
            transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            background: '#023AC6',
          }}
        />
        <CubeSide
          sx={{
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            background: '#386ffa',
          }}
        />
        <CubeSide
          sx={{
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            background: '#336dff',
          }}
        />
        <CubeSide
          sx={{
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            background: '#1c4dca',
          }}
        />
      </Box>
    </Box>
  )
}

export default Cube
