using Library.Server.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;

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

        public User GetUserById(string id)
        {
            return _users.Find(user => user.Id == id).FirstOrDefault();
        }


        public void CreateUser(User user)
        {
            _users.InsertOne(user);
        }

        public async Task CreateUserAsync(User user)
        {
            await _users.InsertOneAsync(user);
        }

        public async Task<User> GetUserAsync(string email)
        {
            return await _users.Find(user => user.Email == email).FirstOrDefaultAsync();
        }

        public async Task AddBookToUserAsync(string id, SmallBookOverview book)
        {
            var filter = Builders<User>.Filter.Eq(user => user.Id, id);
            var update = Builders<User>.Update.Push(user => user.FavBooks, book);
            await _users.UpdateOneAsync(filter, update);
        }

        public async Task<List<SmallBookOverview>> GetBooksByUserAsync(string id)
        {
            var user = await _users.Find(user => user.Id == id).FirstOrDefaultAsync();
            return user.FavBooks ?? new List<SmallBookOverview>();
        }
        public async Task RemoveBookFromUserAsync(string id, SmallBookOverview book)
        {

            var filter = Builders<User>.Filter.Eq(user => user.Id, id);
            var update = Builders<User>.Update.Pull(user => user.FavBooks, book);
            await _users.UpdateOneAsync(filter, update);
        }

    }
}
