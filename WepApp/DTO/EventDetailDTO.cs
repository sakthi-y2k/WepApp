using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepApp.DTO
{
    public class EventDetailDTO
    {
        public int EventId { get; set; }
        public string Name { get; set; }
        public IEnumerable<SlotDTO> Slots { get; set; }

    }
}