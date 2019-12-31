const allConstants = {
  appAvatar: 'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg',
};

const devConstants = {
  apiUrl: 'http://localhost:4225/api/v1',
  ...allConstants,
};

const prodConstants = { ...allConstants };

export const appConstants = {
  development: { ...devConstants },
  production: { ...prodConstants },
};

export const getAppConstants = (key) => {
  const env = process.env.NODE_ENV || 'development';

  return appConstants[env][key];
};
