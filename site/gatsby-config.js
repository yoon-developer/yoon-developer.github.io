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
        url: "https://yoon-developer.github.io",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-green",
      },
    },
  ],
}
