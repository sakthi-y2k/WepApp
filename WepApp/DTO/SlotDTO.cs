using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepApp.DTO
{
    public class SlotDTO
    {
        public int SlotId { get; set; }
        public Nullable<int> EventId { get; set; }
        public string Name { get; set; }
    }
}