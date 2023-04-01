module.exports = function(api) {
  api.cache(true);
  if (process.env.NODE_ENV === 'development' || process.env.BABEL_ENV === 'development') {
    return {
      "presets": ["module:metro-react-native-babel-preset"],
      presets: ['babel-preset-expo'],
      "plugins": ["react-native-paper/babel", ["transform-remove-console", {"exclude": ["error", "warn", "info"]}]]
    }
  } else {
    return {
      presets: ['babel-preset-expo'],
    }
  }
};
