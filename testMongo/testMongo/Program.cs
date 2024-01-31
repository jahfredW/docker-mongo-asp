
using Microsoft.EntityFrameworkCore;
using testMongo.Models;
using MongoDB.Driver;
using MongoDB.Bson;
using testMongo.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using IFramework.Infrastructure;

namespace testMongo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //// Connexion à la base de données MongoDB en local
            //var client = new MongoClient("mongodb://localhost:27017");
            //var database = client.GetDatabase("salles");
            //var collection = database.GetCollection<BsonDocument>("salles");

            //// Récupération de toutes les salles
            //var salles = collection.Find(Builders<BsonDocument>.Filter.Empty).ToList();

            //// Affichage des salles
            //foreach (var salle in salles)
            //{
            //    Console.WriteLine(salle);
            //}

            var builder = WebApplication.CreateBuilder(args);


            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            // Add services to the container.
            builder.Services.Configure<DatabaseSettings>(
                builder.Configuration.GetSection("SallesDatabase"));

            builder.Services.AddTransient<SallesService>();
            builder.Services.AddTransient<UsersService>();

            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.WithOrigins("http://localhost:5173"
                                                          );
                                    
                                  });
            });

            var test = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]);

            // gestion du JWToken 
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                //o.Events = new JwtBearerEvents()
                //{
                //    OnAuthenticationFailed = c =>
                //    {
                //        var test = c.GetDescription();
                //        return new Task<string>(test);
                //    }
                //};





                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey

                    
                    (Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
                    ValidateIssuer = false,
                    ValidateAudience = true,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true
                };
            });

            builder.Services.AddAuthorization(options =>
            {
                options.AddPolicy("AdminOnly", policy =>
                    policy.RequireRole("admin"));
            });

            // Add services to the container.
            //builder.Services.AddDbContext<ApiDbContext>(options => options.UseMySQL(builder.Configuration.GetConnectionString("Default")));
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddControllers().AddNewtonsoftJson();

            var app = builder.Build();

            app.UseCors(MyAllowSpecificOrigins);

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
