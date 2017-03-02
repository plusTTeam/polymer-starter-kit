/* eslint-env node */

module.exports = {
  staticFileGlobs: [
	'/index.html',
	'/manifest.json',
	'/bower_components/webcomponentsjs/webcomponents-lite.min.js'
  ],
  navigateFallback: 'index.html',

  // if you're hosting your app on Firebase, you'll want to uncomment the following line
  // as Firebase owns the __ namespace, and intercepting it will cause things like OAuth to fail.
  //navigateFallbackWhitelist: [/^(?!\/__)/]
};
