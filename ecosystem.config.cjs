module.exports = {
  apps: [
    {
      name: 'sptsn',
      port: '8000',
      env: {
              PORT: 8000,
NITRO_PORT: 8000,
              NUXT_PORT: 8000,
      },
      exec_mode: 'fork',
      instances: 'max',
      script: './.output/server/index.mjs',
    }
  ]
}
