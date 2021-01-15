import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = (props) => (
  <Section aside title='我們的承諾' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        我們十分重視對夥伴的承諾。如果您需要我們的幫助或者對如何使用網站有疑惑或遇到任何技術困難，請隨時與我們聯繫。
      </Text>
    </Card>
  </Section>
)

export default Commitment
