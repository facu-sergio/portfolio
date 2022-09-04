using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Proyectos
    {
        private int _id;
        private string _nombre;
        private string _link;
        private string _descripcion;
        private string _foto;
        private string _imagen;

        public Proyectos()
        {

        }
        public Proyectos(int id, string nombre, string link, string descripcion,string foto , string imagen)
        {
            _id = id;
            _nombre = nombre;
            _link = link;
            _descripcion = descripcion;
            _foto = foto;
            _imagen = imagen;
        }

        public int Id
        {
            get { return _id; }
            set { _id = value; }
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

        public string Descripcion
        {
            get { return _descripcion; }
            set { _descripcion = value; }
        }

        public string Foto
        {
            get { return _foto; }
            set { _foto = value; }
        }

        public string Imagen
        {
            get { return _imagen; }
            set { _imagen = value; }
        }

    }
}