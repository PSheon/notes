import React from 'react'
import { Box } from 'theme-ui'
import PoweredByGatsby from '@components/PoweredByGatsby'
import { HeaderLogo } from '../Header/Header.Logo'

const styles = {
  logo: {
    pb: 1,
    mb: 2,
    mt: [4, 0],
    display: 'flex',
    justifyContent: [`center`, `unset`],
  },
  copyright: {
    pt: 2,
    mb: [2, 4],
    display: 'flex',
    justifyContent: [`center`, `unset`],
  },
}

export const FooterLogo = () => (
  <>
    <Box sx={styles.logo}>
      <HeaderLogo grayscale />
    </Box>
    <Box sx={styles.copyright}>© {new Date().getFullYear()}, 版權所有.</Box>
    <Box>
      <PoweredByGatsby />
    </Box>
  </>
)
