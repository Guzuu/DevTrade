using System;
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
    public class BuildingsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public BuildingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Buildings
        [HttpGet]
        public async Task<IEnumerable<Building>> Index()
        {
            return await _context.Buildings.ToArrayAsync();
        }
    }
}

