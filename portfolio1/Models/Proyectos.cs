using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Proyectos
    {
        private string _nombre;
        private string _link;
        private string _descripcion;
        public Proyectos(string nombre, string link, string descripcion)
        {
            _nombre = nombre;
            _link = link;
            _descripcion = descripcion;
        }

        public string Descripcion
        {
            get { return _descripcion; }
            set { _descripcion = value; }
        }


        public string Link
        {
            get { return _link; }
            set { _link = value; }
        }

        public string Nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }


    }
}