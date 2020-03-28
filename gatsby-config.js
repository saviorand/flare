module.exports = {
  siteMetadata: {
    title: `Вечерний Кофе`,
    name: `Медиа Сион`,
    siteUrl: `https://elegant-kare-e47fee.netlify.com/`,
    description: `Главное - под новым углом.
Самые оригинальные, вдумчивые и полезные аналитические материалы по повестке - поймите, что происходит, не вспотев.`,
    hero: {
      heading: `Главное - под новым углом.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
