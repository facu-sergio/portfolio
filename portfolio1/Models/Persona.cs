using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class Persona
    {
        private int _dni;
        private string _nombre;
        private string _apellido;

        public Persona(int dni, string nombre, string apellido)
        {
            this._dni = dni;
            this._nombre = nombre;
            this._apellido = apellido;
        }

        public string apellido
        {
            get { return _apellido; }
            set { _apellido = value; }
        }


        public string nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }


        public int dni
        {
            get { return _dni; }
            set { _dni = value; }
        }



    }
}