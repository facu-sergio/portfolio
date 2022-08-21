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

        public Skills()
        {

        }
        public Skills(string skillname, int dominio,string foto)
        {
            _skillname = skillname;
            _dominio = dominio;
            _foto = foto;
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

    }
}