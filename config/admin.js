module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4905322f4a01d1a3dc379eb06aed94c7'),
  },
});
