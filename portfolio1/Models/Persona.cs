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
        private int _edad;
        private string _provincia;
        private string _localidad;
        private string _calle;
        private int _numero;

        public Persona(int dni, string nombre, string apellido, int edad, string provincia, string localidad, string calle, int numero)
        {
            _dni = dni;
            _nombre = nombre;
            _apellido = apellido;
            _edad = edad;
            _provincia = provincia;
            _localidad = localidad;
            _calle = calle;
            _numero = numero;
        }

        public string Apellido
        {
            get { return _apellido; }
            set { _apellido = value; }
        }

        public string Nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }


        public int Dni
        {
            get { return _dni; }
            set { _dni = value; }
        }

        public int Edad
        {
            get { return _edad; }
            set { _edad = value; }
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