using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;

namespace portfolio1.Models
{
    public class GestorPersona
    {
        public List<Persona> getPersona()
        {
            List<Persona> lista  = new List<Persona>();
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
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
                    int telefono = dr.GetInt32(9);
                    string descripcion = dr.GetString(10);
                    string oficio = dr.GetString(11);
                    string foto = dr.GetString(12);
                    byte[] bytes = File.ReadAllBytes(foto);
                    string imagen = Convert.ToBase64String(bytes);
                    Persona persona = new Persona(id,dni,nombre,apellido,edad,provincia,localidad,calle,numero,telefono,descripcion,oficio,imagen,foto);
                    lista.Add(persona);
                }
                dr.Close();
                conn.Close();
            }
            return lista;
        }

        
        public bool addPersona(Persona persona)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Persona_Add";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@dni", persona.Dni);
                cmd.Parameters.AddWithValue("@nombre", persona.Nombre);
                cmd.Parameters.AddWithValue("@apellido", persona.Apellido);
                cmd.Parameters.AddWithValue("@edad", persona.Edad);
                cmd.Parameters.AddWithValue("@provincia", persona.Provincia);
                cmd.Parameters.AddWithValue("@localidad", persona.Localidad);
                cmd.Parameters.AddWithValue("@calle", persona.Calle);
                cmd.Parameters.AddWithValue("@numero", persona.Numero);
                cmd.Parameters.AddWithValue("@telefono", persona.Telefono);
                cmd.Parameters.AddWithValue("@descripcion", persona.Descripcion);
                cmd.Parameters.AddWithValue("@oficio", persona.Oficio);
                cmd.Parameters.AddWithValue("@foto", persona.Foto);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
                return res;
            }

        }

        public bool updatePersona(int id,Persona persona)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            persona.Foto = HostingEnvironment.MapPath("~/uploads/") + persona.Foto;
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Persona_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@dni", persona.Dni);
                cmd.Parameters.AddWithValue("@nombre", persona.Nombre);
                cmd.Parameters.AddWithValue("@apellido", persona.Apellido);
                cmd.Parameters.AddWithValue("@edad", persona.Edad);
                cmd.Parameters.AddWithValue("@provincia", persona.Provincia);
                cmd.Parameters.AddWithValue("@localidad", persona.Localidad);
                cmd.Parameters.AddWithValue("@calle", persona.Calle);
                cmd.Parameters.AddWithValue("@numero", persona.Numero);
                cmd.Parameters.AddWithValue("@telefono", persona.Telefono);
                cmd.Parameters.AddWithValue("@descripcion", persona.Descripcion);
                cmd.Parameters.AddWithValue("@oficio", persona.Oficio);
                cmd.Parameters.AddWithValue("@foto", persona.Foto);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
                return res;
            }

        }

        public bool deletePersona(int id)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Persona_delete";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
                return res;
            }

        }
    }
}