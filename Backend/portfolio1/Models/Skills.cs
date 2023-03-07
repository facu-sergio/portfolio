using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Skills
    {
        private int _id;
        private string _skillname;
        private int _dominio;
        private string _foto;
        private string _imagen;
        private string _tipo;

        public Skills()
        {

        }
        public Skills(int id, string skillname, int dominio, string tipo,string foto,string imagen)
        {
            _id = id;
            _skillname = skillname;
            _dominio = dominio;
            _tipo = tipo;
            _foto = foto;
            _imagen = imagen;
           
        }

        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public string Skillname
        {
            get { return _skillname; }
            set { _skillname = value; }
        }

        public int Dominio
        {
            get { return _dominio; }
            set { _dominio = value; }
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

        public string Tipo
        {
            get { return _tipo; }
            set { _tipo = value; }
        }
    }
}