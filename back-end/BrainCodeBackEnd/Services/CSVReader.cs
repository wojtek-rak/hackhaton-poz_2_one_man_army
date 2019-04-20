using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using System.IO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Globalization;
using System.Linq;
using System.Text;

using BrainCodeBackEnd.Models;

namespace BrainCodeBackEnd.Services
{
    public class CSVReader
    {
        public CSVReader()
        {
        }

        public Delivery GetCSV()
        {
            Delivery list = new Delivery();
            const Int32 BufferSize = 128;
            using (var fileStream = File.OpenRead("pickup_points_small_unique.csv"))
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8, true, BufferSize))
            {
                String line;
                line = streamReader.ReadLine();

                while ((line = streamReader.ReadLine()) != null)
                {
                
                    if (line == null) continue;
                    String[] str = line.Split(";");
                    DeliveryEntity delivery = new DeliveryEntity();
                    delivery.Typ = str[0].Replace("\"", "");
                    delivery.Nazwa = str[1].Replace("\"", "");
                    delivery.Adres = str[2].Replace("\"", "");
                    delivery.Kod_pocztowy = str[3].Replace("\"", "");
                    delivery.Miasto = str[4].Replace("\"", "");
                    float dl;
                    float.TryParse(str[5].Replace("\"", ""), NumberStyles.Any, CultureInfo.InvariantCulture, out dl);
                    delivery.Dlugosc = dl;
                    float sr;
                    float.TryParse(str[6].Replace("\"", ""), NumberStyles.Any, CultureInfo.InvariantCulture, out sr);
                    delivery.Szerokosc = sr;
                    delivery.Godziny_odbioru = str[7].Replace("\"", "");
                    delivery.Uwagi = str[8].Replace("\"", "");
                    list.deliveryList.Add(delivery);
                }
            }
            return list;
        }
    }
}
