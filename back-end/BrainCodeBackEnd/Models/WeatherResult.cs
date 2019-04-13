using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrainCodeBackEnd.Models
{
    public class WeatherResult
    {
        public List<WeatherEntity> weather { get; set; }
    }

    public class WeatherEntity
    {
        public double temp { get; set; }
        public string main { get; set; }
        public string icon { get; set; }
        public string dt_txt { get; set; }
    }
}
