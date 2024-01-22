// Ajoutez un délai de 10 secondes (10000 millisecondes) avant de tenter de se connecter à la base de données

//var mongoHost = process.env.MONGO_DB_HOST || 'localhost';
//var mongoPort = process.env.MONGO_DB_PORT || 27017;
//var mongoDatabase = process.env.MONGO_DB_DATABASE || 'salles';

db = connect('mongodb://127.0.0.1:27017/salles');


setTimeout(() => {
    // Connectez-vous à la base de données MongoDB ici
    db.salles.insertMany([
        {
            "_id": 1,
            "nom": "CACA Jazz Club",
            "adresse": {
                "numero": 4,
                "voie": "Rue des Escaliers Sainte-Anne",
                "codePostal": "84000",
                "ville": "Avignon",
                "localisation": {
                    "type": "Point",
                    "coordinates": [43.951616, 4.808657]
                }
            },
            "styles": ["jazz", "soul", "funk", "blues"],
            "avis": [{
                "date": new Date('2019-11-01'),
                "note": NumberInt(8)
            },
            {
                "date": new Date('2019-11-30'),
                "note": NumberInt(9)
            }
            ],
            "capacite": NumberInt(300),
            "smac": true
        }, {
            "_id": 2,
            "nom": "Paloma",
            "adresse": {
                "numero": 250,
                "voie": "Chemin de l'Aérodrome",
                "codePostal": "30000",
                "ville": "Nîmes",
                "localisation": {
                    "type": "Point",
                    "coordinates": [43.856430, 4.405415]
                }
            },
            "avis": [{
                "date": new Date('2019-07-06'),
                "note": NumberInt(10)
            }
            ],
            "capacite": NumberInt(4000),
            "smac": true
        },
        {
            "_id": 3,
            "nom": "Sonograf",
            "adresse": {
                "voie": "D901",
                "codePostal": "84250",
                "ville": "Le Thor",
                "localisation": {
                    "type": "Point",
                    "coordinates": [43.923005, 5.020077]
                }
            },
            "capacite": NumberInt(200),
            "styles": ["blues", "rock"]
        }
    ])
}, 10000);