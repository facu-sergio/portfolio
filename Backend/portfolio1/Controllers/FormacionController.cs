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
    public class FormacionController : ApiController
    {
        // GET: api/Formacion
        public IEnumerable<Formacion> Get()
        {
           gestorFormacion gformacion = new gestorFormacion();
           return gformacion.getFormacion();
            
        }

        // GET: api/Formacion/5
        public Formacion Get(int id)
        {
            gestorFormacion gformacion = new gestorFormacion();
            return gformacion.getEstudio(id);
        }

        // POST: api/Formacion
        public bool Post([FromBody]Formacion formacion)
        {
            gestorFormacion gformacion = new gestorFormacion();
            return gformacion.addFormacion(formacion);
        }

        // PUT: api/Formacion/5
        public bool Put(int id, [FromBody]Formacion formacion)
        {
            gestorFormacion gformacion = new gestorFormacion();
            return gformacion.updateFormacion(id, formacion);
        }

        // DELETE: api/Formacion/5
        public bool Delete(int id)
        {
            gestorFormacion gformacion = new gestorFormacion();
            return gformacion.deleteFormacion(id);
        }
    }
}
