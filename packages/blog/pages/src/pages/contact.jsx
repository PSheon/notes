import React from 'react'
import { Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

export default () => (
  <>
    <Seo title='聯繫我們' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header='聯繫我們吧'
          subheader='有任何建議、提醒或者通知都可以透過電子郵件聯繫我們喔！.'
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        <Commitment />
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </>
)
