import { MDB } from './lib/model/db';

// build db connections when starting APP
export = (app) => {
  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');

    await MDB.initDB(app.config.mongoose);

    console.log('✅  Your awesome APP launched');
  });
};
