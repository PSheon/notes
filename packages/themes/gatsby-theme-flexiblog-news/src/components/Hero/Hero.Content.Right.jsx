import React from 'react'
import { Box, Heading } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  box: {
    borderLeft: `5px solid`,
    borderLeftColor: `omegaLighter`,
    pl: 5,
    py: 2,
    my: 5,
  },
  quote: {
    color: `omegaDark`,
    fontWeight: `body`,
  },
  writer: {
    color: `omegaDark`,
    mb: 0,
  },
}

export default () => (
  <Box sx={styles.box}>
    <Heading variant='h3' sx={styles.quote}>
      “紙上得來終覺淺，絕知此事要躬行”
    </Heading>
    <Heading variant='h4' sx={styles.writer}>
      陸游 《冬夜讀書示子聿》
    </Heading>
  </Box>
)
