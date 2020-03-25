const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const plugins = [withFonts, withOptimizedImages, withBundleAnalyzer];

const nextConfig = {
    // next-optimized-images
    optimizeImagesInDev: true
    // webpack(config, options) {
    //     return config;
    // }
};

module.exports = withPlugins(plugins, nextConfig);
