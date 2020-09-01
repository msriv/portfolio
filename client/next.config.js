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
    SERVER_HEROKU: "",
  },
};
