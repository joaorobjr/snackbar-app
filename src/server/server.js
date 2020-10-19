import app from './app.js';
import settings from './config/config.js';

app.listen(settings.port, () => {
  global.logger.info('Express server listening on port ' + settings.port);
});
