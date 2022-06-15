const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Gen',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/localrobyn/dev/docz-test/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Gen',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/localrobyn/dev/docz-test',
          templates:
            '/Users/localrobyn/dev/docz-test/node_modules/docz-core/dist/templates',
          docz: '/Users/localrobyn/dev/docz-test/.docz',
          cache: '/Users/localrobyn/dev/docz-test/.docz/.cache',
          app: '/Users/localrobyn/dev/docz-test/.docz/app',
          appPackageJson: '/Users/localrobyn/dev/docz-test/package.json',
          appTsConfig: '/Users/localrobyn/dev/docz-test/tsconfig.json',
          gatsbyConfig: '/Users/localrobyn/dev/docz-test/gatsby-config.js',
          gatsbyBrowser: '/Users/localrobyn/dev/docz-test/gatsby-browser.js',
          gatsbyNode: '/Users/localrobyn/dev/docz-test/gatsby-node.js',
          gatsbySSR: '/Users/localrobyn/dev/docz-test/gatsby-ssr.js',
          importsJs: '/Users/localrobyn/dev/docz-test/.docz/app/imports.js',
          rootJs: '/Users/localrobyn/dev/docz-test/.docz/app/root.jsx',
          indexJs: '/Users/localrobyn/dev/docz-test/.docz/app/index.jsx',
          indexHtml: '/Users/localrobyn/dev/docz-test/.docz/app/index.html',
          db: '/Users/localrobyn/dev/docz-test/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
