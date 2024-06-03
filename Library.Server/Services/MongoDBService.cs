using Library.Server.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library.Server.Services
{
    public class MongoDBService
    {
        private readonly IMongoCollection<User> _users;

        public MongoDBService(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);
            _users = database.GetCollection<User>("Users");
        }

        public async Task CreateUserAsync(User user)
        {
            await _users.InsertOneAsync(user);
        }

        public async Task<User> GetUserAsync(string email)
        {
            return await _users.Find(user => user.Email == email).FirstOrDefaultAsync();
        }

        public async Task AddBookToUserAsync(string email, SmallBookOverview book)
        {
            var filter = Builders<User>.Filter.Eq(user => user.Email, email);
            var update = Builders<User>.Update.Push(user => user.FavBooks, book);
            await _users.UpdateOneAsync(filter, update);
        }

        public async Task<List<SmallBookOverview>> GetBooksByUserAsync(string email)
        {
            var user = await _users.Find(user => user.Email == email).FirstOrDefaultAsync();
            return user.FavBooks ?? new List<SmallBookOverview>();
        }
    }
}
