﻿using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using testMongo.Services;
//using testMongo.Models.DTO;
//using testMongo.Models.Data;
using testMongo.Models;
using testMongo.Dto;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Microsoft.AspNetCore.Authorization;

namespace testMongo.Controllers;


[Route("api/[controller]")]
[ApiController]
public class SallesController : ControllerBase
{
    private readonly SallesService _SallesService;
    private readonly IMapper _mapper;

    public SallesController(SallesService service, IMapper mapper)
    {
        _SallesService = service;
        _mapper = mapper;
    }

    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SallesDtoOut>>> Get()
    {
        var listeSalles =  await _SallesService.GetAsync();
        var  salles = _mapper.Map<IEnumerable<SallesDtoOut>>(listeSalles);
        return Ok(salles);
    }


    [HttpGet("{id}", Name = "GetSalleById")]
 
    public async Task<ActionResult<Salle>> Get(ObjectId id)
    {
        var SalleItem = await _SallesService.GetAsync(id);

        if (SalleItem != null)
        {
            return Ok(SalleItem);
        }

        return NotFound();
    }

    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<ActionResult<Salle>> CreateSalle([FromForm]Salle entity)
    {
        await _SallesService.CreateAsync(entity);

        return CreatedAtRoute("GetSalleById", new { id = entity.Id }, entity);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateSalle(ObjectId id, Salle entity)
    {
        var SalleFromRepo = await _SallesService.GetAsync(id);

        if (SalleFromRepo == null)
        {
            return NotFound();
        }

        entity.Id = SalleFromRepo.Id;

        SalleFromRepo.Nom = entity.Nom;

        await _SallesService.UpdateAsync(id, SalleFromRepo);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(ObjectId id)
    {
        var book = await _SallesService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _SallesService.RemoveAsync(id);

        return NoContent();
    }
    //[HttpPatch("{id}")]
    //public ActionResult PartialSalleUpdate(int id, [FromBody] JsonPatchDocument<Salle> patchDoc)
    //{
    //    var SalleFromRepo = _SallesService.GetSalleById(id);

    //    if (SalleFromRepo == null)
    //    {
    //        return NotFound();
    //    }

    //    var SalleToPatch = _mapper.Map<Salle>(SalleFromRepo);

    //    patchDoc.ApplyTo(SalleToPatch, ModelState);
    //    if (!TryValidateModel(SalleToPatch))
    //    {
    //        return ValidationProblem();
    //    }

    //    _mapper.Map(SalleToPatch, SalleFromRepo);
    //    _SallesService.UpdateSalle(SalleFromRepo);

    //    return NoContent();
    //}
}

