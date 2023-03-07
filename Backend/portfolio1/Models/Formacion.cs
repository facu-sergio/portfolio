using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Formacion
    {
        private int _id;
        private string _titulo;
        private int _age;
        private string _institucion;
        private string _desc;

        public Formacion()
        {

        }

        public Formacion(int id,string titulo, int age, string institucion, string desc)
        {
            _id = id;
            _titulo = titulo;
            _age = age;
            _institucion = institucion;
            _desc = desc;
        }

        public int Id
        {
            get { return _id; }
            set { _id = value; }
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
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }

        public string Titulo
        {
            get { return _titulo; }
            set { _titulo = value; }
        }

    }
}