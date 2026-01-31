// import type { NextConfig } from "next";


// const nextConfig: NextConfig = {
//   images: {
//     domains: ['hearthealers.in'],
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block',
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin',
//           },
//           {
//             key: 'Permissions-Policy',
//             value: 'camera=(), microphone=(), geolocation=()',
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hearthealers.in",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ❌ REMOVE THIS (iframe kills Google Maps)
          // { key: "X-Frame-Options", value: "DENY" },

          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },

          // ✅ FIXED CSP
          {
            key: "Content-Security-Policy",
            value: isDev
              ? `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval'
                  https://connect.facebook.net
                  https://www.facebook.com;
                style-src 'self' 'unsafe-inline';
                img-src 'self' data:
                  https://hearthealers.in
                  https://www.facebook.com
                  https://www.google.com;
                media-src 'self'
                  https://hearthealers.in
                  https://www.facebook.com;
                frame-src
                  https://www.facebook.com
                  https://www.google.com
                  https://maps.google.com;
              `.replace(/\s+/g, " ")
              : `
                default-src 'self';
                script-src 'self' 'unsafe-inline'
                  https://connect.facebook.net
                  https://www.facebook.com;
                style-src 'self' 'unsafe-inline';
                img-src 'self' data:
                  https://hearthealers.in
                  https://www.facebook.com
                  https://www.google.com;
                media-src 'self'
                  https://hearthealers.in
                  https://www.facebook.com;
                frame-src
                  https://www.facebook.com
                  https://www.google.com
                  https://maps.google.com;
              `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;




