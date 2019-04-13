using System;
using System.Collections.Generic;
using System.Globalization;
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

        [HttpGet("PointsFilter/{filter}")]
        public JsonResult GetFilter(string filter)
        {
            var filters = filter.Split(",");

            float dl;
            float.TryParse(filters[0], NumberStyles.Any, CultureInfo.InvariantCulture, out dl);
            float sr;
            float.TryParse(filters[1], NumberStyles.Any, CultureInfo.InvariantCulture, out sr);

            var maxFilterDistance = 0.1f;

            var filteredList = _delivery.deliveryList
                .Where(x => Math.Abs(x.Dlugosc - dl) < maxFilterDistance && Math.Abs(x.Szerokosc - sr) < maxFilterDistance).ToList();

            var sortedList = filteredList.OrderBy(x =>
                Math.Sqrt((x.Szerokosc - sr) * (x.Szerokosc - sr) + (x.Dlugosc - dl) * (x.Dlugosc - dl))).ToList();

            return Json(sortedList);
        }

    }
}
