const devConstants = {
  apiUrl: 'http://localhost:4225/api/v1',
};

const prodConstants = {};

export const appConstants = {
  development: { ...devConstants },
  production: { ...prodConstants },
};
