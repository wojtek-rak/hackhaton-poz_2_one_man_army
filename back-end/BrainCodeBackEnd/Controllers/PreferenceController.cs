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
        public void getPreferences(int price)
        {
            var lastTen = new List<int>();
            lastTen = [8, 0, 10, 15, 0, 0, 25];
            var avg = lastTen.Average();
            Console.WriteLine("dupa xd");
            Console.WriteLine(avg);


        }
    }
}
