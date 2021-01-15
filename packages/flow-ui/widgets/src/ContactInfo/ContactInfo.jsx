import React from 'react'
import { Card, Text } from 'theme-ui'
// import { Card, Text, IconButton } from 'theme-ui'
// import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'
import Section from '@components/Section'
// import useSiteMetadata from '@helpers/useSiteMetadata'

const ContactInfo = () => {
  // const { phone, address, email } = useSiteMetadata()

  return (
    <Section aside title='商業合作'>
      <Card variant='paper'>
        <Text variant='p'>有興趣一起合作嗎？</Text>
        <Text variant='p'>
          to empower every person and organization on the planet to achieve more
        </Text>
        {/* {phone && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaPhone />
            </IconButton>
            {phone}
          </Text>
        )}
        {email && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaEnvelope />
            </IconButton>
            {email}
          </Text>
        )}
        {address && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaLocationArrow />
            </IconButton>
            {address}
          </Text>
        )} */}
      </Card>
    </Section>
  )
}

export default ContactInfo
