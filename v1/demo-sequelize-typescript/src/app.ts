import { DB } from './lib/model/db';

// build db connections when starting APP
export = (app) => {
  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');

    await DB.initDB(app.config.sequelize);

    console.log('✅  Your awesome APP launched');
  });
};
