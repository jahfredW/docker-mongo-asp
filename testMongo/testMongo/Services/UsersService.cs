using MongoDB.Driver;
using testMongo.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;



namespace testMongo.Services;

public class UsersService
{
    public readonly IMongoCollection<User> users;
    public readonly IConfiguration _configuration;

    public UsersService(IOptions<DatabaseSettings> databaseSettings, IConfiguration configuration)
    {
        var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            databaseSettings.Value.DatabaseName);

        var collectionName = User.CollectionName();
        users = mongoDatabase.GetCollection<User>(collectionName);
        _configuration = configuration;
    }

    public async Task<List<User>> GetAsync() =>
        await users.Find(_ => true).ToListAsync();

    public async Task<User?> GetAsync(ObjectId id) =>
        await users.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(User newUser) =>
        await users.InsertOneAsync(newUser);

    public async Task UpdateAsync(ObjectId id, User updatedUser) =>
        await users.ReplaceOneAsync(x => x.Id == id, updatedUser);

    public async Task RemoveAsync(ObjectId id) =>
        await users.DeleteOneAsync(x => x.Id == id);

    public string authenticate(string email, string password)
    {
        User user = users.Find(user => user.Email == email && user.Password == password).FirstOrDefault();
        return Security.Authenticate(user, _configuration);
    }
        

       


}
        
     
  

