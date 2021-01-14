require('dotenv').config()

module.exports = {
  pathPrefix: '/notes',
  plugins: [
    {
      /* Google Analytics Settings */
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      /* Algolia */
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/algolia-blog/src/queries'),
      },
    },
    {
      /* DISQUS Settings */
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: process.env.DISQUS_SHORTNAME,
      },
    },
    {
      /* PWA Settings */
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "PSheon's Notes",
        short_name: 'Notes',
        start_url: '/notes',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png',
      },
    },
    {
      /* SiteMap Settings */
      resolve: 'gatsby-plugin-sitemap',
      options: {},
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-news',
      options: {
        siteUrl: 'https://psheon.github.io/notes',
        services: {
          algolia: true,
          disqus: true,
        },
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    siteUrl: 'https://psheon.github.io/notes',
    title: "PSheon's Notes",
    name: 'notes',
    description: "PSheon's Notes",
    address: 'Taipei, Taiwan',
    email: 'pauljiang61020@gmail.com',
    phone: '+(886) 98888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs',
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs',
      },
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Our Team',
        slug: '/authors',
      },
      {
        name: 'Contact',
        slug: '/contact',
      },
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact',
          },
          {
            name: 'About Us',
            slug: '/about',
          },
          {
            name: 'Contact Us',
            slug: '/contact',
          },
        ],
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/',
          },
          {
            name: 'Cookie Policy',
            slug: '/',
          },
          {
            name: 'Terms Of Use',
            slug: '/',
          },
        ],
      },
    ],
  },
}
