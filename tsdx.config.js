const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: false, // 自带样式
        extract: !!options.writeMeta,
        // modules: true, // 使用css modules
        camelCase: true, // 支持驼峰
        sass: true, // 是否使用sass
        // less: true, // 暂不使用
      })
    );
    return config;
  },
};

// const postcss = require('rollup-plugin-postcss');
// const autoprefixer = require('autoprefixer');
// const image = require('@rollup/plugin-image');
// const cssnano = require('cssnano');

// module.exports = {
//     rollup(config, options) {
//         config.plugins.push(
//             postcss({
//                 plugins: [
//                     autoprefixer(),
//                     cssnano({
//                         preset: 'default', // 压缩
//                     }),
//                 ],
//                 inject: true, // 是否主动注入css到js中(设置为true,则在引用组件的时候,就无需再单独引入css了)
//                 extract: !!options.writeMeta, //
//                 // modules: true, // 使用css modules
//                 camelCase: true, // 支持驼峰
//                 sass: true, // 是否使用sass
//                 less: true, // 是否使用less
//             }),
//         );
//         // 截至2021年3月: 必须使用 unshift 添加 image 插件, 否则报错
//         config.plugins.unshift(image());
//         return config;
//     },
// };
