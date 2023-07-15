const nextTranslate = require("next-translate-plugin")

module.exports = nextTranslate({})
/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  export default nextConfig;