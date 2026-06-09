module.exports = {
  apps: [
    {
      name: "tl-mini-server",
      script: "bin\\www",
      env: {
        NODE_ENV: "production"
      },
      instances: 1,
      exec_mode: "fork"
    }
  ]
}