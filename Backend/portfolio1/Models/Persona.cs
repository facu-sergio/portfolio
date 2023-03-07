using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text.Json.Serialization;

namespace portfolio1.Models
{
    public class Persona
    {
        private int _id;
        private int _dni;
        private string _nombre;
        private string _apellido;
        private int _edad;
        private string _provincia;
        private string _localidad;
        private string _calle;
        private int _numero;
        private int _telefono;
        private string _descripcion;
        private string _oficio;
        private string _imagen;



        private string _foto;

        public Persona()
        {

        }

        public Persona(int id, int dni, string nombre, string apellido, int edad, string provincia, string localidad, string calle, int numero, int telefono, string descripcion, string oficio,string imagen, string foto)
        {
            _id = id;
            _dni = dni;
            _nombre = nombre;
            _apellido = apellido;
            _edad = edad;
            _provincia = provincia;
            _localidad = localidad;
            _calle = calle;
            _numero = numero;
            _telefono = telefono;
            _descripcion = descripcion;
            _oficio = oficio;
            _imagen = imagen;
            _foto = foto;
        }

        public int Id
        {
            get { return _id; }
            set { _id = value; }
        }

        public int Dni
        {
            get { return _dni; }
            set { _dni = value; }
        }

        public string Nombre
        {

            get { return _nombre; }
            set { _nombre = value; }
        }

        public string Apellido
        {
            get { return _apellido; }
            set { _apellido = value; }
        }


        public int Edad
        {
            get { return _edad; }
            set { _edad = value; }
        }

        public string Provincia
        {
            get { return _provincia; }
            set { _provincia = value; }
        }

        public string Localidad
        {
            get { return _localidad; }
            set { _localidad = value; }
        }


        public string Calle
        {
            get { return _calle; }
            set { _calle = value; }
        }


        public int Numero
        {
            get { return _numero; }
            set { _numero = value; }
        }

        public int Telefono
        {
            get { return _telefono; }
            set { _telefono = value; }
        }
        public string Descripcion
        {
            get { return _descripcion; }
            set { _descripcion = value; }
        }
        public string Oficio
        {
            get { return _oficio; }
            set { _oficio = value; }
        }


        public string Imagen
        {
            get { return _imagen; }
            set { _imagen = value; }
        }

        public string Foto
        {
            get { return _foto; }
            set { _foto = value; }
        }

    }
}