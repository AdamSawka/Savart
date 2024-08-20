export default () => ({
  'image-optimizer': {
    enabled: true,
    config: {
      include: ['jpeg', 'jpg', 'png', 'webp'],
      exclude: ['gif'],
      formats: ['webp'],
      sizes: [
        {
          name: 'sm',
          width: 400,
          withoutEnlargement: true,
        },
        {
          name: 'original',
          width: 1920,
          withoutEnlargement: true,
        },
      ],
      quality: 87,
    },
  },});
