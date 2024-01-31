using Microsoft.Extensions.Options;
using MongoDB.Driver;
using testMongo.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections;

namespace testMongo.Services
{
    public class SallesService
    {
        private readonly IMongoCollection<Salle> _SallesCollection;

        public SallesService(
            IOptions<DatabaseSettings> salleStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                salleStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                salleStoreDatabaseSettings.Value.DatabaseName);

            _SallesCollection = mongoDatabase.GetCollection<Salle>(Salle.CollectionName());
        }

        public async Task<List<Salle>> GetAsync() =>
            await _SallesCollection.Find(_ => true).ToListAsync();

        public async Task<Salle?> GetAsync(ObjectId id) =>
            await _SallesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Salle newSalle) =>
            await _SallesCollection.InsertOneAsync(newSalle);

        public async Task UpdateAsync(ObjectId id, Salle updatedSalle) =>
            await _SallesCollection.ReplaceOneAsync(x => x.Id == id, updatedSalle);

        public async Task RemoveAsync(ObjectId id) =>
            await _SallesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
