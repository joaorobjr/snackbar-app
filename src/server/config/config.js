const settings = {
  port: 3000,
  dbUrl: 'localhost:27017/snackbar',
  appEndpoint: 'http://localhost:3000',
  apiEndpoint: 'http://localhost:3000}',
  appName: process.env.npm_package_name,
  logLevel: 'silly',
};
/*
if (process.env.NODE_ENV === 'production') {
  const settings = {
    port: 3000,
    dbUrl: 'localhost:27017/snackbar',
    appEndpoint: 'http://localhost:3000',
    apiEndpoint: 'http://localhost:3000}',
    appName: process.env.npm_package_name,
    logLevel: 'info',
  };
}*/
export default settings;
