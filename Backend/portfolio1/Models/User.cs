using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Rol { get; set; }

        public User(string username, string password, string rol)
        {
            Username = username;
            Password = password;
            Rol = rol;
        }
    }
}