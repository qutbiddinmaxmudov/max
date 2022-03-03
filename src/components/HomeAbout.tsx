import {  Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Wrapper from '../layout/Wrapper'
import img from '../images/Image.png'
import Dot from './common/Dot'
import SvgButton from './common/SvgButton'



const HomeAbout = () => (
  <Wrapper sx={{ paddingTop: '180px' }}>
    <Grid container height={'100%'} justifyContent="space-between">
      <Grid item xs={5} lineHeight={0} position={'relative'}>
        <Image src={img} objectFit={'cover'} objectPosition={'top'} layout="fill" />
      </Grid>
      <Grid item xs={6} alignSelf="center">
        <Typography variant="h1" component="h2">
          About me
          <Dot />
        </Typography>
        <Typography fontSize={'24px'} lineHeight={'29px'} marginBottom={'30px'} marginTop={'26px'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Typography>
        <SvgButton>Hello</SvgButton>
      </Grid>
    </Grid>
  </Wrapper>
)

export default HomeAbout
