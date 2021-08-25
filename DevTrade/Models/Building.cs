using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevTrade.Models
{
    public class Building
    {
        public int Id { get; set; }
        public string Area { get; set; }
        public decimal Price { get; set; }
        public int BuildingTypeId { get; set; }

        public virtual BuildingType BuildingType { get; set; }
    }
}
