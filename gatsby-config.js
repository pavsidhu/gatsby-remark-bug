require("dotenv").config()

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPostImages`,
        path: `${__dirname}/content/images/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          }
        ]
      }
    }
  ]
}
