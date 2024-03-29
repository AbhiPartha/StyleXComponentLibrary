import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import { dts } from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json');

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !production
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !production
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({
        tsconfig: 'tsconfig.esm.json',
        tsconfigOverride: {
          exclude: ['.storybook', 'src/documentation', 'src/pages']
        }
      }),
      scss({ fileName: 'main.css', outputStyle: 'compressed', sourceMap: !production }),
      postcss({
        extensions: ['.css']
      }),
      image({
        limit: 10000
      }),
      terser()
    ],
    external: ['preact']
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: ['preact']
  }
];
