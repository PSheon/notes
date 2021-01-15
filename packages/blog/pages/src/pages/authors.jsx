import React from 'react'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'

export default () => {
  const authors = useBlogAuthors()

  return (
    <>
      <Seo title='關於文章作者' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header='文章作者'
          subheader='我們是一群熱愛分享知識、富有冒險精神的人.'
        />
      </Stack>
      <Stack>
        <Main>
          {authors.map((author) => (
            <>
              <Divider />
              <AuthorExpanded author={author} withLink />
            </>
          ))}
        </Main>
      </Stack>
    </>
  )
}
