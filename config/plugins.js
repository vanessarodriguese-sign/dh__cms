module.exports = {
  upload: {
    config: {
      provider: 'strapi-provider-upload-cloudflare-r2',
      providerOptions: {
        accessKeyId: 'f9d50b6f607186ce12bd99eb16a09bd5',
        secretAccessKey: 'cfa67097fbaa5a7c4d2953b1cfb1a122255881a7ae3ff3843e48a7fe9ea0ecd2',
        region: 'auto',
        params: {
          Bucket: 'e-sign',
        },
      },
    },
  },
};
