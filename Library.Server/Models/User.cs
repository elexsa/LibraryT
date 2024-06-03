// User.cs
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Library.Server.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    public string Email { get; set; }
    public string Password { get; set; }
    public List<SmallBookOverview> FavBooks { get; set; }
}
