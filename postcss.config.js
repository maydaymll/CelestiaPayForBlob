module.exports = {
  plugins: [
    require('postcss-write-svg')({
      utf8: false,
    }),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 13,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignorevw-'],
      minPixelValue: 1, 
      mediaQuery: false,
      replace: true, 
      exclude: [/node_modules/, /view-desktop/], 
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1134,
    }),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px',
      viewportWidth: 1920,
      unitPrecision: 13,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignorevw-'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/, /view-mobile/],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 1134,
    }),
    require('postcss-viewport-units')({
      filterRule: (rule) =>
        rule.nodes.findIndex((i) => i.prop === 'content') === -1,
    }),
    require('autoprefixer'),
  ],
}
