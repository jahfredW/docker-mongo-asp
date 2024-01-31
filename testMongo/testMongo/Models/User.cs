using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace testMongo.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("role")]
        public string Role {  get; set; }

        public static string CollectionName()
        {
            return "users";
        }
    }
}
