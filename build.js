const esbuild = require('esbuild');

const isWatch = process.argv.includes('--watch');


const buildOptions = {
  entryPoints: ['index.js'],
  bundle: true,
  outdir: 'dist',
  entryNames: '[name]',
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.jsx': 'jsx',
    '.js': 'jsx',
    '.css': 'css'
  },
  external: ['react', 'react-dom']
};
// const buildOptions = {
//   entryPoints: ['index.js'],
//   bundle: true,
//   outfile: 'dist/bundle.js',
//   format: 'esm',
//   jsx: 'automatic',
//   define: {
//     'process.env.NODE_ENV': '"production"'
//   },
//   alias: {
//     'react': 'https://esm.sh/react@18',
//     'react-dom': 'https://esm.sh/react-dom@18'
//   },
//   loader: {
//     '.jsx': 'jsx',
//     '.js': 'jsx',
//     '.css': 'css'
//   },
//   external: ['https://esm.sh/*']
// };

if (isWatch) {
  esbuild.context(buildOptions).then(ctx => {
    ctx.watch();
    console.log('👀 Watching for changes...');
  }).catch(() => process.exit(1));
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}