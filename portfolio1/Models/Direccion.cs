using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Direccion
    {
        private string _provincia;
        private string _localidad;
        private string _calle;
        private int _numero;

        public Direccion(string provincia, string localidad, string calle, int numero)
        {
            _provincia = provincia;
            _localidad = localidad;
            _calle = calle;
            _numero = numero;
        }

        public int Numero
        {
            get { return _numero; }
            set { _numero = value; }
        }


        public string Calle
        {
            get { return _calle; }
            set { _calle = value; }
        }

        public string Localidad
        {
            get { return _localidad; }
            set { _localidad = value; }
        }



        public string Provincia
        {
            get { return _provincia; }
            set { _provincia = value; }
        }

    }
}