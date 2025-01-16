const { User, Post, Comment, Follower, Attachment } = require('./service/sequelize/models');

async function insertUsers() {
  const users = [];
  for (let i = 1001; i <= 100000; i++) {
    users.push({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      mobile_number: `123456${i}`,
    });
  }
  await User.bulkCreate(users);
}

async function insertPosts() {
  const users = await User.findAll({ attributes: ['id'], raw: true });
  const posts = [];
  for (let i = 1001; i <= 100000; i++) {
    posts.push({
      user_id: users[Math.floor(Math.random() * users.length)].id,
      content: `Post ${i} Content`,
      title: `Post ${i} Title`,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  await Post.bulkCreate(posts);
}

async function insertComments() {
  const posts = await Post.findAll({ attributes: ['id', 'user_id'], raw: true });
  const comments = [];
  for (let i = 1001; i <= 100000; i++) {
    const key = Math.floor(Math.random() * posts.length);
    comments.push({
      user_id: posts[key].user_id,
      post_id: posts[key].id,
      comment: `Comment ${i} Content`,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  await Comment.bulkCreate(comments);
}

async function run() {
  await insertUsers();
  await insertPosts();
  await insertComments();
}
run().then(() => {
  console.log('Data inserted successfully');
  process.exit(0);
}).catch((err) => {
  console.error('Error inserting data:', err);
  process.exit(1);
});