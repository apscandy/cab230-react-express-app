module.exports = {
  apps: [
    {
      name: "Development server",
      script: "index.js",
      watch: ["../"],
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: "development",
        APP_MODE: "api",
        PORT_HTTP: 2080,
        PORT_HTTPS: 3000,
        MYSQL_HOST: "127.0.0.1",
        MYSQL_USER: "root",
        MYSQL_PASSWORD: "root",
        MYSQL_DATABASE: "volcanoes"
      },
    }
  ]
};
