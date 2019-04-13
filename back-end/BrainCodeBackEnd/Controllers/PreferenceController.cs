using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BrainCodeBackEnd.Controllers
{
    public class PreferenceController : Controller
    {
        // GET: /<controller>/
        public string getPreferences(int price, string category)
        {
            string paczkomat = "paczkomat";
            string odbior = "odbior";
            string kurier = "kurier";
            string result;

            List<String> homeCat = new List<String>{ "Elektronika", "Dom i ogród" };
            List<String> paczkCat = new List<string>{ "Moda", "Uroda" };
            List<String> odbiorCat = new List<string> { "Motoryzacja" };

            //to chce od wojtka 
            List<float> distance = new List<float>() { 1000, 10, 50, 150, 200, 300 };
            float minDistance = distance.Min();

            List<int> lastTen = new List<int>(){ 8, 0, 10, 15, 0, 0, 25 };
            float avgDelivery = (float)lastTen.Average();


            if (homeCat.Contains(category))
            {
                if (price > 200)
                {
                    result = kurier;
                }
                else
                {
                    if (minDistance < 500)
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
                    if (minDistance < 500)
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
