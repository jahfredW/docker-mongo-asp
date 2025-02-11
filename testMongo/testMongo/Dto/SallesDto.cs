﻿using MongoDB.Bson;
using testMongo.Models;

namespace testMongo.Dto
{
    public class SallesDto
    {
        public ObjectId Id { get; set; }

        public string Nom { get; set; }

        public AdressesDto Adresse { get; set; }

        public LocalisationsDto Localisation { get; set; }

        public List<string> Styles { get; set; }

        public List<AvisDto> AvisListe { get; set; }

        public int Capacite { get; set; }

        public bool Smac { get; set; }
    }

    public class SallesDtoOut
    {
        public ObjectId Id { get; set; }

        public string Nom { get; set; }

        public AdressesDto Adresse { get; set; }

        public List<string> Styles { get; set; }

        public List<AvisDto> AvisListe { get; set; }

        public int Capacite { get; set; }

        public bool Smac { get; set; }
    }
}
