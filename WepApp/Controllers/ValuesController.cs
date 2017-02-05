using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WepApp.DTO;

namespace WepApp.Controllers
{
    public class ValuesController : ApiController
    {
        SchoolEntities db = new SchoolEntities();
        // GET api/values
        public IEnumerable<EventDTO> Get()
        {
            var events = from b in db.Events
                         select new EventDTO()
                         {
                             EventId = b.EventId,
                             Name = b.Name
                         };

            return events;
        }

        // GET api/values/5
        public EventDetailDTO Get(int id)
        {
            var data = db.Events.Include("Slots").Select(b =>
        new EventDetailDTO()
        {
            EventId = b.EventId,
            Name = b.Name,
            Slots = b.Slots.Select(s => new SlotDTO()
            {
                SlotId = s.SlotId,
                EventId = s.EventId,
                Name = s.Name
            })
            }).SingleOrDefault(b => b.EventId == id);

            return data;
        }

        // POST api/values
        public void Post([FromBody]EventDetailDTO data)
        {
            var eventData =
        new Event()
        {
            EventId = data.EventId,
            Name = data.Name,
            Slots = data.Slots.Select(s => new Slot()
            {
                EventId = s.EventId,
                Name = s.Name
            }).ToList()
        };

            db.Events.Add(eventData);

            db.SaveChanges();
        }

        // PUT api/values/5
        [HttpPost]
        public void Put(int id, [FromBody]EventDetailDTO data)
        {
            var eventData =
        new Event()
        {
            EventId = data.EventId,
            Name = data.Name,
            Slots = data.Slots.Select(s => new Slot()
            {
                EventId = s.EventId,
                Name = s.Name
            }).ToList()
        };

            foreach (var slot in eventData.Slots.ToList())
            {
                db.Entry(slot).State = EntityState.Modified;
            }
            db.Entry(eventData).State = EntityState.Modified;

            db.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            var data = db.Events.FirstOrDefault(x=>x.EventId == id);

            foreach(var slot in data.Slots.ToList())
            {
                db.Entry<Slot>(slot).State = EntityState.Deleted;
            }
            db.Entry<Event>(data).State = EntityState.Deleted;

            db.SaveChanges();
        }
    }

    public class Student
    {
        public int Id { get; set; }

        [MaxLength(10)]
        public string Name { get; set; }

    }
}
