const chalk = require('chalk');
const { sync, seedDevData } = require('./server/db/index');

const seed = async () => {
  try {
    console.log(chalk.cyan('Starting seed.'));

    await sync(true);

    await seedDevData();

    console.log(chalk.greenBright('Seed successful.'));
  } catch (e) {
    console.log(chalk.red('Seed failed.'));
    console.error(e);
  }

  process.exit(1);
}

seed();
