module.exports = {
  upload: {
    config: {
      provider: 'strapi-provider-upload-cloudflare-r2',
      providerOptions: {
        accessKeyId: process.env.CLOUDFARE_KEY_ID,
        secretAccessKey: process.env.CLOUDFARE_SECRET_KEY,
        region: 'auto',
        params: {
          Bucket: 'e-sign',
        },
      },
    },
  },
};
