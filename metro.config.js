const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  transformer: {
    // Eğer `.svg` gibi dosyaları kullanıyorsanız, transformer yapılandırmasını burada ekleyebilirsiniz.
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Özelleştirilmiş resolver ayarları yapabilirsiniz
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'], // Gerekli uzantıları ekleyin
  },
};
