using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace portfolio1.Models
{
    public class GestorExperiencia
    {
        public List<Experiencia> getExperiencia()
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            List<Experiencia> lista = new List<Experiencia>();
            using(SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Experiencia_all";
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string puesto = dr.GetString(1);
                    string periodo = dr.GetString(2);
                    string descripcion = dr.GetString(3);

                    Experiencia exp = new Experiencia(puesto,periodo,descripcion);
                    lista.Add(exp);
                }
                dr.Close();
                conn.Close();
            }
            return lista;
        }

        public bool addExperiencia (Experiencia exp)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn =  new SqlConnection(strConn))
            {

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Experiencia_add";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@puesto", exp.Puesto);
                cmd.Parameters.AddWithValue("@periodo", exp.Periodo);
                cmd.Parameters.AddWithValue("@descripcion", exp.Desc);

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

                return res;
            }

        }


        public bool updateExperiencia(int id ,Experiencia exp)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Experiencia_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@puesto", exp.Puesto);
                cmd.Parameters.AddWithValue("@periodo", exp.Periodo);
                cmd.Parameters.AddWithValue("@descripcion", exp.Desc);

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

                return res;
            }

        }

        public bool deleteExperiencia(int id)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Experiencia_del";
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

                return res;
            }
        }
    }
}