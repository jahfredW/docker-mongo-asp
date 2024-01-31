using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class UsersProfiles : Profile
    {
        public UsersProfiles()
        {
            CreateMap<User, UserDtoOut>();
            CreateMap<UserDtoIn, User>();
            CreateMap<UserDtoOut, User>();
        }
    }
}
