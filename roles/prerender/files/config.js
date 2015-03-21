module.exports = {
  engine: 'phantom',
  //engine: 'jsdom',
  appUrl: 'https://hummingbird.me/',
  plugins: [
      'removeScriptTags',
      'httpHeaders'
  ]
};
