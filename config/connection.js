const development = {
    url: "mongodb+srv://atharva:qLWwFJJThULJzIhV@insaid-cluster.95acmqb.mongodb.net/?retryWrites=true&w=majority"
};

const production = {
    url: process.env.MONGODB_URL
};

module.exports = {
    development,
    production
};
  