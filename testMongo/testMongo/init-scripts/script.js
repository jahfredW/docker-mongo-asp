// Ajoutez un d�lai de 10 secondes (10000 millisecondes) avant de tenter de se connecter � la base de donn�es

//var mongoHost = process.env.MONGO_DB_HOST || 'localhost';
//var mongoPort = process.env.MONGO_DB_PORT || 27017;
//var mongoDatabase = process.env.MONGO_DB_DATABASE || 'salles';

db = connect('mongodb://127.0.0.1:27017/salles');



    // Connectez-vous � la base de donn�es MongoDB ici
    db.salles.insertMany([
        {
            "_id": ObjectId('65b0fcbea47e5a041477508d'),
            "nom": "Super Jazz Club",
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
            "_id": ObjectId('65b0ff842d51c72753883658'),
            "nom": "Paloma",
            "adresse": {
                "numero": 250,
                "voie": "Chemin de l'A�rodrome",
                "codePostal": "30000",
                "ville": "N�mes",
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
            "_id": ObjectId('65b0ff842d51c75753883658'),
            "nom": "Sonograf",
            "adresse": {
                "numero": 250,
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
        },
        {
            "_id": ObjectId('65b0ff842d51c75753883741'),
            "nom": "Chez Fredator",
            "adresse": {
                "numero": 250,
                "voie": "route du Fion",
                "codePostal": "59240",
                "ville": "Dunkerque",
                "localisation": {
                    "type": "Point",
                    "coordinates": [51.049999, 2.36667]
                }
            },
            "capacite": NumberInt(200),
            "styles": ["anal", "partouzes"]
        },
        {
            "_id": ObjectId('65b0ff842d51c75753883721'),
            "nom": "Chez Arnaud",
            "adresse": {
                "numero": 66,
                "voie": "route de Gaetan Fenix",
                "codePostal": "41225178",
                "ville": "Rio De Janeiro",
                "localisation": {
                    "type": "Point",
                    "coordinates": [445454.95, 5030015.16]
                }
            },
            "capacite": NumberInt(200),
            "styles": ["anal", "partouzes"]
        }
    ])



db.users.insertMany([
    {
        "_id": ObjectId('65b0fcbea47e5a041477512d'),
        "email": "fred.gruwe@gmail.com",
        "password": "abcdef",
        "role" : "admin"
    },
    {
        "_id": ObjectId('65b0ff842d51c75753513658'),
        "email": "admin@admin.com",
        "password": "abcdef",
        "role": "user"
    }
])