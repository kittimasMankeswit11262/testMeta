// module.exports = {
//     i18n: {
//         locales: ['th', 'en'],
//         defaultLocale: 'th'
//     }
// }
// const { nextI18NextRewrites } = require('next-i18next/rewrites')

// const localeSubpaths = {}

// module.exports = {
//     rewrites: async () => nextI18NextRewrites(localeSubpaths),
//     publicRuntimeConfig: {
//         localeSubpaths,
//     },
// }

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}