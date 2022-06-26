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
        private Direccion _direccion;
        private List<Skills>  _listaSkills;
        private List<Formacion> _listaFormacion;
        private List<Experiencia> _listaExp;
        private List<Proyectos> _listaProyectos;

        public List<Proyectos> ListaProyectos
        {
            get { return _listaProyectos; }
            set { _listaProyectos = value; }
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

        public Direccion Direccion
        {
            get { return _direccion; }
            set { _direccion = value; }
        }

        public List<Skills> ListaSkills
        {
            get { return _listaSkills; }
            set { _listaSkills = value; }
        }

        public List<Formacion> ListaFormacion
        {
            get { return _listaFormacion; }
            set { _listaFormacion = value; }
        }

        public List<Experiencia> ListaExp
        {
            get { return _listaExp; }
            set { _listaExp = value; }
        }

    }
}