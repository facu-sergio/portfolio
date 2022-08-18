using portfolio1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace portfolio1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
    public class RedesController : ApiController
    {
        // GET: api/Redes
        public IEnumerable<Redes> Get()
        {
            GestorRedes gRedes = new GestorRedes();
            return gRedes.getRedes();
        }

        // GET: api/Redes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Redes
        public bool Post([FromBody]Redes red)
        {
            GestorRedes gRedes = new GestorRedes();
            return gRedes.addRed(red);
        }

        // PUT: api/Redes/5
        public bool Put(int id, [FromBody] Redes red)
        {
            GestorRedes gRedes = new GestorRedes();
            return gRedes.updateRed(id, red);
        }

        // DELETE: api/Redes/5
        public bool Delete(int id)
        {
            GestorRedes gRedes = new GestorRedes();
            return gRedes.deleteRed(id);
        }
    }
}
