using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace testMongo.Models
{
    public class Salle
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        [BsonElement("nom")]
        public string Nom { get; set; }

        [BsonElement("adresse")]
        public Adresse? Adresse { get; set; } 


        [BsonElement("styles")]
        public List<string>? Styles { get; set; }

        [BsonElement("avis")]
        public List<Avis>? AvisListe { get; set; }

        [BsonElement("capacite")]
        public int Capacite { get; set; }

        [BsonElement("smac")]
        public bool? Smac { get; set; }
    }




}