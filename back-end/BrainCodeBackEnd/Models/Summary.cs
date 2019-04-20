using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace BrainCodeBackEnd.Models
{
    public class Summary
    {
        public string LengthInMeters { get; set; }
        public string TravelTimeInSeconds { get; set; }
        public string TrafficDelayInSeconds { get; set; }
        public string DepartureTime { get; set; }
        public string ArrivalTime { get; set; }
    }

}
