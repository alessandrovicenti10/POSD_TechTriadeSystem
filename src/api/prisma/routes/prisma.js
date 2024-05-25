module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/prisma',
      handler: 'prisma.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
