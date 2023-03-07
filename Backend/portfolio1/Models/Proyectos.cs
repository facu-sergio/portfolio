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
        private string _web;
        private string _descripcion;
        private string _foto;
        private string _imagen;
        private string _foto2;
        private string _imagen2;
        

       
        public Proyectos()
        {

        }
        public Proyectos(int id, string nombre, string link, string web, string descripcion,string foto , string imagen,string foto2, string imagen2)
        {
            _id = id;
            _nombre = nombre;
            _link = link;
            _web = web;
            _descripcion = descripcion;
            _foto = foto;
            _imagen = imagen;
            _foto2 = foto2;
            _imagen2 = imagen2;
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


        public string Foto2
        {
            get { return _foto2; }
            set { _foto2 = value; }
        }


        public string Imagen2
        {
            get { return _imagen2; }
            set { _imagen2 = value; }
        }

        public string Web
        {
            get { return _web; }
            set { _web = value; }
        }

    }
}