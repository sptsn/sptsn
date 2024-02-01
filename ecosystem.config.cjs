module.exports = {
  apps: [
    {
      name: 'sptsn',
      port: '8000',
      exec_mode: 'fork',
      instances: 'max',
      script: './.output/server/index.mjs',
    }
  ]
}
