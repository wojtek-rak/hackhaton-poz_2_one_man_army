using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace BrainCodeBackEnd.Models
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class Delivery
    {
       public List<DeliveryEntity> deliveryList = new List<DeliveryEntity>();
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public  class DeliveryEntity
    {
        public string Typ { get; set; }
        public string Nazwa { get; set; }
        public string Adres { get; set; }
        public string Kod_pocztowy { get; set; }
        public string Miasto { get; set; }
        public float Dlugosc { get; set; }
        public float Szerokosc { get; set; }
        public string Godziny_odbioru { get; set; }
        public string Uwagi { get; set; }
    }
}
