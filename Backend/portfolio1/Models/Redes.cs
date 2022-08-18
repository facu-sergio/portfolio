using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Redes
    {
        private string _nombre;
        private string _link;

        public Redes(string nombre, string link)
        {
            _nombre = nombre;
            _link = link;
        }

        public string Nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }

        public string Link
        {
            get { return _link; }
            set { _link = value; }
        }

    }
}