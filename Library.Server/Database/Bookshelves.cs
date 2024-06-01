using MongoDB.Driver;
using MongoDB.Bson;

namespace Library.Server.Database
{
    public class Bookshelves
    {

        private static MongoClient ConnectToMongoServer()
        {
            const string connectionUri = "mongodb+srv://lexa:ss6dbKuW8c3aVrMn@shelves.a1iivaa.mongodb.net/?retryWrites=true&w=majority&appName=shelves";
            var settings = MongoClientSettings.FromConnectionString(connectionUri);
            // Set the ServerApi field of the settings object to set the version of the Stable API on the client
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            // Create a new client and connect to the server
            var client = new MongoClient(settings);
            return client;
        }

        public static async Task InsertIntoFavourite()
        {
            var client = ConnectToMongoServer();
            // Send a ping to confirm a successful connection
            try
            {
                var collection = client.GetDatabase("sample_mflix").GetCollection<BsonDocument>("movies");
                var filter = Builders<BsonDocument>.Filter.Eq("title", "Back to the Future");
                var document = collection.Find(filter).First();
                Console.WriteLine(document);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
        public static async Task CreateShelf()
        {
            var client = ConnectToMongoServer();    
            try
            {
                var result = client.GetDatabase("admin").RunCommand<BsonDocument>(new BsonDocument("ping", 1));
                Console.WriteLine("Pinged your deployment. You successfully connected to MongoDB!");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
