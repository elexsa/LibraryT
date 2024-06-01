using Library.Server.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;

namespace Library.Server.Database
{
    public class UserRepository
    {
        private readonly IMongoCollection<User> _users;

        public UserRepository(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("MongoDB"));
            var database = client.GetDatabase(config["DatabaseName"]);
            _users = database.GetCollection<User>("users");
        }

        public User GetUserByEmail(string email)
        {
            return _users.Find(user => user.Email == email).FirstOrDefault();
        }

        public void CreateUser(User user)
        {
            _users.InsertOne(user);
        }
    }
}
