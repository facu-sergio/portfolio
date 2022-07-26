using portfolio1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace portfolio1.Controllers
{
    public class SkillsController : ApiController
    {
        // GET: api/Skills
        public IEnumerable<Skills> Get()
        {
            GestorSkills gSkill = new GestorSkills();
            return gSkill.getSkills();
        }

        // GET: api/Skills/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Skills
        public bool Post([FromBody]Skills skill)
        {
            GestorSkills gSkill = new GestorSkills();
            return gSkill.addSkill(skill);
        }

        // PUT: api/Skills/5
        public bool Put(int id, [FromBody]Skills skill)
        {
            GestorSkills gSkill = new GestorSkills();
            return gSkill.updateSkill(id,skill);
        }

        // DELETE: api/Skills/5
        public bool Delete(int id)
        {
            GestorSkills gSkill = new GestorSkills();
            return gSkill.deleteSkill(id);
        }
    }
}
