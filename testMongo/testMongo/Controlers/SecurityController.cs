using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using testMongo.Dto;
using testMongo.Models;
using testMongo.Services;

namespace testMongo.Controlers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UsersService _usersService;

        public SecurityController(UsersService userService, IMapper mapper)
        {
            _usersService = userService;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login( [FromBody] UserDtoIn user)
        {
            var token = _usersService.authenticate(user.Email, user.Password);

            if (token == null)
            {
                return Unauthorized();
            }

            return Ok(new { token });
        }

    }
}
