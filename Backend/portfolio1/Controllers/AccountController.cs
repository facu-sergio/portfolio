using portfolio1.API.Controllers;
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
    [AllowAnonymous]
    public class AccountController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Login(Login login)
        {
            List<User> res;
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            GestorLogin gestorLogin = new GestorLogin();
            res = gestorLogin.getUser(login);
            if (res.Count>0)
            {
                var token = TokenGenerator.GenerateTokenJwt(res[0].Username,res[0].Rol);
                return Ok(token);
            }
            else
                return Unauthorized();//Status code 401
        }
    }
}
