import React from 'react'
import { Text } from 'theme-ui'
import TextList from '@components/TextList'
import { FaRegClock } from 'react-icons/fa'
import moment from 'moment'
import { buildResponsiveVariant as rv } from '../utils'

const CardFooterInfo = ({ variant, date, timeToRead }) => (
  <TextList nowrap>
    {date && (
      <Text sx={{ variant: rv(variant, 'date') }}>
        {moment(date).format('MMMM DD, YYYY')}
      </Text>
    )}
    {timeToRead && (
      <Text sx={{ variant: rv(variant, 'timeToRead') }}>
        <FaRegClock css={{ verticalAlign: `middle` }} /> {timeToRead} 分鐘
      </Text>
    )}
  </TextList>
)

export default CardFooterInfo
