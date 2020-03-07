import babel from'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import serve from'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  input: 'src/index.jsx',
  output: {
    format: 'cjs',
    dir: 'dist',
    entryFileNames: '[name]-[hash].js',
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    commonjs({
      namedExports: {
        'src/react-dev/react-dom.js': ['render']
      },
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    (NODE_ENV !== 'production' && serve({ contentBase: '' })),
    (NODE_ENV !== 'production' && livereload()),
    (NODE_ENV === 'production' && terser()),
  ]
};
