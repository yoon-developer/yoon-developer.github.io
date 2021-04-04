module.exports = ({
  basePath = "/",
  contentPath = "content/",
  showThemeLogo = false,
  theme = "dark-green",
}) => {
  return {
    siteMetadata: {
      description: "Personal page of John Doe",
      locale: "ko",
      showThemeLogo,
      title: "yoon-developer",
      formspreeEndpoint: "https://formspree.io/f/{your-id}",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")(theme)),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
      `gatsby-plugin-react-svg`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
