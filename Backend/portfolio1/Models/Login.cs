using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace portfolio1.Models
{
    public class Login
    {   
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }


    }
}