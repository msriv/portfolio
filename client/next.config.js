module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts|tsx)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
  env: {
    SERVER_LOCAL: "localhost:1337",
    SERVER_REMOTE:
      "https://api-ap-northeast-1.graphcms.com/v2/cke8a5ix5l8hd01z62emvc0rh/master",
  },
};
