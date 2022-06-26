using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Experiencia
    {
        private string _puesto;
        private string _periodo;
        private string _desc;

        public Experiencia(string puesto, string periodo, string desc)
        {
            _puesto = puesto;
            _periodo = periodo;
            _desc = desc;
        }

        public string Desc
        {
            get { return _desc; }
            set { _desc = value; }
        }


        public string Periodo
        {
            get { return _periodo; }
            set { _periodo = value; }
        }


        public string Puesto
        {
            get { return _puesto; }
            set { _puesto = value; }
        }

    }
}