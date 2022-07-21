using portfolio1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace portfolio1.Controllers
{
    public class ExperienciaController : ApiController
    {
        // GET: api/Experiencia
        public IEnumerable<Experiencia> Get()
        {
            GestorExperiencia gExperiencia = new GestorExperiencia();
            return gExperiencia.getExperiencia();
        }

        // GET: api/Experiencia/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Experiencia
        public bool Post([FromBody]Experiencia experiencia)
        {
            GestorExperiencia gExperiencia = new GestorExperiencia();
            bool res = gExperiencia.addExperiencia(experiencia);
            return res;
        }

        // PUT: api/Experiencia/5
        public bool Put(int id, [FromBody]Experiencia experiencia)
        {
            GestorExperiencia gExperiencia = new GestorExperiencia();
            bool res = gExperiencia.updateExperiencia(id, experiencia);
            return res;
        }

        // DELETE: api/Experiencia/5
        public bool Delete(int id)
        {
            GestorExperiencia gExperiencia = new GestorExperiencia();
            bool res = gExperiencia.deleteExperiencia(id);
            return res;
        }
    }
}
