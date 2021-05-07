module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ["./assets/fonts/"], // stays the same
  dependencies: {
    "@react-native-community/async-storage": {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
      },
    },
  },
};
//$ npx react-native link
