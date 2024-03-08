
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental : {
//         instrumentationHook : true,
//     },
//     webpack5: true,
//     webpack: config => {
//       config.resolve.fallback = {
//         fs: false,
//         path:false,
//         http: false,
//         https: false,
//         zlib: false,
//         crypto: false,
//         os: false,
//         tls: false,
//         net: false,
//         assert: false,
//         console: false,
//         module: false,
//         process: false,
//         stream : false,
//         constants : false,
//         dns: false,
//         readline: false,
//         child_process: false,
//         util: false,
//         events: false, 
//       };
  
//       return config;
//     },
  
// };

// export default nextConfig;
// next.config.js
export function webpack(config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) {
  // Modify the config as needed
  return config;
}

