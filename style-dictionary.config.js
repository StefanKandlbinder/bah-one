const glob = require('glob');

// put all token json files into an array of file paths
// const tokenFiles = glob.sync('.storybook/designsystem/**/*tokens*.json, src/app/**/*tokens*.json');
const tokenFiles = glob.sync('.storybook/designsystem/**/*tokens*.json');

console.info(tokenFiles);

module.exports = {
  source: [
    // include your token files as you normally would here
    '.storybook/designsystem/**/*tokens*.json',
    // '.src/app/**/*tokens*.json'
  ],
  platforms: {
    scss: {
      transformGroup: 'css',
      // map the array of toke file paths to style dictionary output files
      files: tokenFiles.map(filePath => {
        return {
          format: 'css/variables',
          destination: filePath.replace('.json', '.css'),
          // the next version of style dictionary adds a filePath property
          // you can filter against
          filter: (token) => {
            console.info(token);
            token.filePath === filePath
          }
        }
      }),
    }
  }
}
