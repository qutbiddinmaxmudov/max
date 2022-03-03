import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../layout/Wrapper'
import Dot from './common/Dot'
import ScrollArrow from './ScrollArrow'

interface Props {
  scrollClick: () => void
}

const Intro = ({ scrollClick }: Props) => (
  <Wrapper sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '120px' }}>
    <Typography variant="h1" maxWidth={650}>
      <FormattedMessage id="intro.title" />
      <Dot />
    </Typography>
    <Typography
      fontSize={48}
      fontWeight="500"
      sx={{
        color: (theme) => theme.palette.info.main,
      }}
    >
      <FormattedMessage id="intro.subtitle" />
    </Typography>
    <Box display="flex" alignItems={'flex-start'}>
      <Typography fontSize={64} lineHeight={'60px'} marginRight="10px" sx={{ userSelect: 'none' }}>
        “
      </Typography>
      <Typography maxWidth={530} fontSize="24px">
        <FormattedMessage id="intro.text" />
      </Typography>
    </Box>
    <ScrollArrow
      clickFunc={scrollClick}
      sx={{
        position: 'absolute',
        bottom: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
      }}
    />
  </Wrapper>
)

export default Intro
