using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace portfolio1.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
    public class FileController : ApiController
    {
        // GET: api/File
        public string Get()
        {
            byte[] bytes = File.ReadAllBytes("C:\\Users\\facu1\\source\\repos\\Portfolio\\Backend\\portfolio1\\uploads\\react.png");
            string image = Convert.ToBase64String(bytes);
            return image;
        }

        // GET: api/File/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/File
        public string Post()
        {
            var file = HttpContext.Current.Request.Files.Count > 0 ? HttpContext.Current.Request.Files[0] : null;
            if(file != null && file.ContentLength > 0)
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(HttpContext.Current.Server.MapPath("~/uploads"), fileName);
                file.SaveAs(path);
            }
            return "success" + file!=null ? "/uploads/" + file.FileName: null;
        }

        // PUT: api/File/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/File/5
        public void Delete(int id)
        {
        }
    }
}
