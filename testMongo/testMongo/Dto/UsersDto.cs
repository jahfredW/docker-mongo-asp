using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace testMongo.Dto
{
    public class UserDtoIn
    {
        public string Email { get; set; }

        public string Password { get; set; }

    }

    public class UserDtoOut
    {
        public ObjectId Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

    }
}
