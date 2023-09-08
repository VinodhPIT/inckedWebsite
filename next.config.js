

/** @type {import('next').NextConfig} */

const nextConfig = {
  
  images: {
      domains:['storage.googleapis.com'],
    },
   env: {
    
    apiDomain: 'https://apiadmin.inckd.com/web/api',
    googlePlacesApiKey: 'AIzaSyDo8sjdevbkqLGUx_DFpFlYlQFb1FpRAIo',

    },
    
    i18n: {
      // The locales you want to support in your app
      locales: ["en", "de"],
      // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en",
     
      
    },

  
    // experimental: {
    //   serverActions: true,
    // },
    
}
module.exports = nextConfig
