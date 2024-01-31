using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using testMongo.Services;
using testMongo.Dto;
using testMongo.Models;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;

namespace testMongo.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly UsersService _UsersService;
    private readonly IMapper _mapper;

    public UsersController(UsersService service, IMapper mapper)
    {
        _UsersService = service;
        _mapper = mapper;
    }
    [Authorize(Policy = "AdminOnly")]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDtoOut>>> GetAllUsers()
    {
        var listeUsers = await _UsersService.GetAsync();
 
        var users = _mapper.Map<IEnumerable<UserDtoOut>>(listeUsers);
        return Ok(users);
    }

    [HttpGet("{id}", Name = "GetUserById")]

    public async Task<ActionResult<UserDtoOut>> Get(ObjectId id)
    {
        var UserItem = await _UsersService.GetAsync(id);

        if (UserItem != null)
        {
            return Ok(UserItem);
        }

        return NotFound();
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<ActionResult<UserDtoOut>> CreateSalle([FromForm] UserDtoIn entity)
    {
        // mapping du DtoIn en User : 
        User user; 
        user = _mapper.Map<User>(entity);
        await _UsersService.CreateAsync(user);

        return CreatedAtRoute("GetUserById", new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateUser (ObjectId id, User entity)
    {
        var UserFromRepo = await _UsersService.GetAsync(id);

        if (UserFromRepo == null)
        {
            return NotFound();
        }

        entity.Id = UserFromRepo.Id;

        UserFromRepo.Email = entity.Email;

        await _UsersService.UpdateAsync(id, UserFromRepo);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(ObjectId id)
    {
        var book = await _UsersService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _UsersService.RemoveAsync(id);

        return NoContent();
    }


}
