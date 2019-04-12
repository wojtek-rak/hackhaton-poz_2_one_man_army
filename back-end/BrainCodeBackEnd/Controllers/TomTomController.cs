using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;

namespace BrainCodeBackEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/TomTom")]
    public class TomTomController : Controller
    {

        public static readonly HttpClient httpClient = new HttpClient();
        public TomTomController()
        {
            httpClient.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "https://api.opencagedata.com/geocode/v1");

        }

        [HttpGet("{positionFrom}/{positionTo}")]
        public string Get(string positionFrom, string positionTo)
        {
            var path = positionFrom + ":" + positionTo;

            return path;
        }

        [HttpGet("GetCoordinates/{street}")]
        public async Task<string>  GetCoordinates(string street)
        {
            var replacedStreet = street.Replace("-", "+");

            var response = SendGetRequest($"https://api.opencagedata.com/geocode/v1/json?q={street}&key=80cce232bf9f4937986a47adbb9d5d86");

            string responseBody = await response.Content.ReadAsStringAsync();

            var obj = JObject.Parse(responseBody );
            var coordinates = obj["results"].First()["bounds"]["northeast"];
            var latitude = coordinates.First().First().Value<float>();
            var longitude = coordinates.Last().First().Value<float>();
            return latitude.ToString() + ":" + longitude.ToString();
        }


        private HttpResponseMessage SendGetRequest(string url)
        {
            try
            {
                return httpClient.GetAsync(url).Result;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

    }
}