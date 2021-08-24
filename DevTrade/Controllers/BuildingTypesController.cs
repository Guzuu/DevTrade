﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevTrade.Data;
using DevTrade.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace DevTrade.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class BuildingTypesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public BuildingTypesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: BuildingTypes
        [HttpGet]
        public async Task<IEnumerable<BuildingType>> Index()
        {
            return await _context.BuildingTypes.ToArrayAsync();
        }

        // POST: BuildingTypes/Create
        [HttpPost]
        public async Task Create([FromBody]BuildingType buildingType)
        {
            if (ModelState.IsValid)
            {
                _context.Add(buildingType);
                await _context.SaveChangesAsync();
            }
        }
    }
}

