import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

export default () => (
  <>
    <Seo title='頁面不存在' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header='歐喔，這個頁面不存在.'
            subheader='您可能輸入了錯誤的網址或頁面已經搬家囉.'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            回到首頁
          </Button>
        </Section>
      </Main>
    </Stack>
  </>
)
