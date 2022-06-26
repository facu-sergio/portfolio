using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Formacion
    {
        private string _titulo;
        private int _año;
        private string _institucion;
        private string _desc;
        public Formacion(string titulo, int año, string institucion, string desc)
        {
            _titulo = titulo;
            _año = año;
            _institucion = institucion;
            _desc = desc;
        }

        public string Institucion
        {
            get { return _institucion; }
            set { _institucion = value; }
        }
        public string Desc
        {
            get { return _desc; }
            set { _desc = value; }
        }
        public int Año
        {
            get { return _año; }
            set { _año = value; }
        }

        public string Titulo
        {
            get { return _titulo; }
            set { _titulo = value; }
        }

    }
}