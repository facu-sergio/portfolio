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
    public class ProyectosController : ApiController
    {
        // GET: api/Proyectos
        public IEnumerable<Proyectos> Get()
        {
            GestorProyectos gProyectos = new GestorProyectos();
            return gProyectos.getProyectos();
        }

        // GET: api/Proyectos/5
        public Proyectos Get(int id)
        {
            GestorProyectos gProyectos = new GestorProyectos();
            return  gProyectos.GetProyecto(id);
            
        }

        // POST: api/Proyectos
        public bool Post([FromBody]Proyectos proyecto)
        {
            GestorProyectos gProyecto = new GestorProyectos();
            return gProyecto.addProyecto(proyecto);
        }

        // PUT: api/Proyectos/5
        public bool Put(int id, [FromBody]Proyectos proyecto)
        {
            GestorProyectos gProyecto = new GestorProyectos();
            return gProyecto.updateProyecto(id,proyecto);
        }

        // DELETE: api/Proyectos/5
        public bool Delete(int id)
        {
            GestorProyectos gProyecto = new GestorProyectos();
            return gProyecto.deleteProyecto(id);
        }
    }
}
