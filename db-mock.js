const { User } = require('./service/sequelize/models');
async function run() {
  const users = await User.findAll({
    limit: 10,
  });
  console.info(users);
}
run().then(() => {
  console.log('Data inserted successfully');
  process.exit(0);
}).catch((err) => {
  console.error('Error inserting data:', err);
  process.exit(1);
});