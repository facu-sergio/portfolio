using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Experiencia
    {
        private int _id;
        private string _puesto;
        private string _periodo;
        private string _desc;

        public Experiencia()
        {
            
        }

        public Experiencia(int id,string puesto, string periodo, string desc)
        {
            _id = id;
            _puesto = puesto;
            _periodo = periodo;
            _desc = desc;
        }

        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }
        public string Puesto
        {
            get { return _puesto; }
            set { _puesto = value; }
        }
        public string Periodo
        {
            get { return _periodo; }
            set { _periodo = value; }
        }

        public string Desc
        {
            get { return _desc; }
            set { _desc = value; }
        }

    }
}