// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig | {
//     images: {
//       domains: ['lh3.googleusercontent.com'],
//     },
//   };

// next.config.js
// module.exports = {
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = Object.assign({}, nextConfig, {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
});
