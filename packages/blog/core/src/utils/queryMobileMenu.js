module.exports = async ({ graphql }) => {
  if (!graphql) return

  const result = await graphql(`
    {
      allArticleCategory {
        nodes {
          name
          slug
        }
      }
    }
  `)

  const items = result.data.allArticleCategory.nodes

  return items
    ? {
        title: '文章主題',
        items,
      }
    : null
}
