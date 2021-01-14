import React from 'react'
import { Heading } from 'theme-ui'
import Typewriter from 'typewriter-effect'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    span: {
      color: `omegaDark`,
    },
  },
}

export default () => (
  <Heading variant='h2' sx={styles.heading}>
    {/* Get Inspired to Achieve */}
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2500)
          .typeString('這是一個分享知識的平台，你要做的是保持好奇')
          .pauseFor(1300)
          .deleteChars(4)
          .typeString('<strong>持續學習</strong>')
          .pauseFor(1300)
          .deleteChars(4)
          .typeString('<strong>累積知識</strong>')
          .pauseFor(1300)
          .deleteChars(4)
          .typeString(
            '，最終<strong>將你腦海中的知識<span style="color: #E5464F;">轉換成財富！</span></strong>',
          )
          .pauseFor(1000)
          .start()
      }}
    />
  </Heading>
)
