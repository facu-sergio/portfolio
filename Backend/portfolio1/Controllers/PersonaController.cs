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
    
    [EnableCors(origins: "*", headers:"*", methods:"GET, POST, PUT, DELETE, OPTIONS")]
    
    public class PersonaController : ApiController
    {
        // GET: api/Persona
        public IEnumerable<Persona> Get()
        {
            GestorPersona gPersona = new GestorPersona();
            return gPersona.getPersona();
        }

        // GET: api/Persona/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Persona
        [Authorize]
        public bool Post([FromBody]Persona persona)
        {
            GestorPersona gPersona = new GestorPersona();
            bool res =  gPersona.addPersona(persona);
            return res;
        }

        // PUT: api/Persona/5
        public bool Put(int id, [FromBody]Persona persona)
        {
            GestorPersona gPersona = new GestorPersona();
            bool res = gPersona.updatePersona(id, persona);
            return res;

        }

        // DELETE: api/Persona/5
        [Authorize]
        public bool Delete(int id)
        {
            GestorPersona gPersona = new GestorPersona();
            bool res = gPersona.deletePersona(id);
            return res;
        }
    }
}
