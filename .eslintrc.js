module.exports = {
  root: true,
  extends: '@react-native-community',
  'react/no-unstable-nested-components': [
    'off' ,
    {
      allowAsProps: true ,
      customValidators:
        [] /* optional array of validators used for propTypes validation */,
    },
  ],
};
