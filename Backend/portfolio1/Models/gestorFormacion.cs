using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class gestorFormacion
    {
        public List<Formacion> getFormacion()
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            List<Formacion> lista = new List<Formacion>();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Formacion_all";
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    string titulo = dr.GetString(1);
                    int año = dr.GetInt32(2);
                    string institucion = dr.GetString(3);
                    string desc = dr.GetString(4);

                    Formacion formacion = new Formacion(titulo, año, institucion, desc);
                    lista.Add(formacion);
                }
                conn.Close();
            }
            return lista;
        }

        public bool addFormacion(Formacion formacion)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Formacion_add";
                cmd.CommandType = CommandType.StoredProcedure;
                

                cmd.Parameters.AddWithValue("@titulo", formacion.Titulo);
                cmd.Parameters.AddWithValue("@año", formacion.Año);
                cmd.Parameters.AddWithValue("@institucion", formacion.Institucion);
                cmd.Parameters.AddWithValue("@descripcion", formacion.Desc);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
            }
            return res;
        }
        public bool updateFormacion(int id,Formacion formacion)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Formacion_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@titulo", formacion.Titulo);
                cmd.Parameters.AddWithValue("@año", formacion.Año);
                cmd.Parameters.AddWithValue("@institucion", formacion.Institucion);
                cmd.Parameters.AddWithValue("@descripcion", formacion.Desc);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
            }
            return res;
        }

        public bool deleteFormacion(int id)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Formacion_delete";
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
                    Console.WriteLine(ex);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }
            }
            return res;
        }
    }
}