using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrainCodeBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BrainCodeBackEnd.Controllers
{
    [Route("api/[controller]")]
    public class PointsController : Controller
    {
        private readonly Delivery _delivery;
        public PointsController(Delivery delivery)
        {
            _delivery = delivery;
        }
        // GET: api/values
        [HttpGet("Points")]
        public JsonResult Get()
        {

            return Json(_delivery.deliveryList);
        }

    }
}
