using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using BrainCodeBackEnd.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BrainCodeBackEnd.Controllers
{
    [Route("api/[controller]")]
    public class PreferenceController : Controller
    {

        private readonly Delivery _delivery;
        public PreferenceController(Delivery delivery)
        {
            _delivery = delivery;
        }
        // GET: /<controller>/
        [HttpGet("{price}/{category}/{filter}")]
        public string GetPreferences(int price, string category, string filter)
        {
            string paczkomat = "paczkomat";
            string odbior = "odbior";
            string kurier = "kurier";
            string result;

            List<String> homeCat = new List<String>{ "Elektronika", "Dom i ogród" };
            List<String> paczkCat = new List<string>{ "Moda", "Uroda" };
            List<String> odbiorCat = new List<string> { "Motoryzacja" };

            var filters = filter.Split(",");

            float dl;
            float.TryParse(filters[0], NumberStyles.Any, CultureInfo.InvariantCulture, out dl);
            float sr;
            float.TryParse(filters[1], NumberStyles.Any, CultureInfo.InvariantCulture, out sr);


            //to chce od wojtka 

            var maxFilterDistance = 0.1f;

            var filteredList = _delivery.deliveryList
                .Where(x => Math.Abs(x.Dlugosc - dl) < maxFilterDistance && Math.Abs(x.Szerokosc - sr) < maxFilterDistance).ToList();

            var distance = filteredList.Select(x =>
                Math.Sqrt((x.Szerokosc - sr) * (x.Szerokosc - sr) + (x.Dlugosc - dl) * (x.Dlugosc - dl))).ToList();

            //List<float> distance = new List<float>() { 1000, 10, 50, 150, 200, 300 };
            var minDistance = distance.Min();

            List<int> lastTen = new List<int>(){ 8, 0, 10, 15, 0, 0, 25 };
            float avgDelivery = (float)lastTen.Average();

            var minDist = 0.05d;

            if (homeCat.Contains(category))
            {
                if (price > 200)
                {
                    result = kurier;
                }
                else
                {
                    if (minDistance < minDist)
                    {
                        result = paczkomat;
                    }
                    else
                    {
                        result = kurier;
                    }
                }
            }
            else
            {
                if (odbiorCat.Contains(category))
                {
                    if (price < 500)
                    {
                        result = kurier;
                    }
                    else
                    {
                        result = odbior;
                    }
                }
                else
                {
                    if (minDistance < minDist)
                    {
                        result = paczkomat;
                    }
                    else
                    {
                        result = kurier;
                    }
                }
            }
            return result;
        }
    }
}
