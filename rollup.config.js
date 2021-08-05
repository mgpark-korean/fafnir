import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import html from '@rollup/plugin-html'
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-import-css';

export default {
  input: 'src/index.tsx',
  output: {
    file: './dist/build.js',
    format: 'cjs'
  },
  plugins: [
      typescript(),
      image(),
      html({publicPath:'public', template: "index.html"}),
      commonjs(),
      css()
      // postcss({ modules: true })
  ]
}
