module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "ko",
    title: "yoon-developer",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-green",
      },
    },
  ],
}
