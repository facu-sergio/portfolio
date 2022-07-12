using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class GestorPersona
    {
        public List<Persona> getPersona()
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            List<Persona> lista  = new List<Persona>();

            using (SqlConnection conn= new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Persona_all";
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = cmd.ExecuteReader();

                while(dr.Read())
                {
                    int id = dr.GetInt32(0);
                    int dni = dr.GetInt32(1);
                    string nombre = dr.GetString(2);
                    string apellido = dr.GetString(3);
                    int edad = dr.GetInt32(4);
                    string provincia = dr.GetString(5);
                    string localidad = dr.GetString(6);
                    string calle = dr.GetString(7);
                    int numero = dr.GetInt32(8);

                    Persona persona = new Persona(dni,nombre,apellido,edad,provincia,localidad,calle,numero);
                    lista.Add(persona);
                }
                dr.Close();
                conn.Close();
            }
            return lista;
        }
    }
}