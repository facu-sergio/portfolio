using Grpc.Core;
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
    public class GestorProyectos
    {
      public List<Proyectos> getProyectos()
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            List<Proyectos> lista = new List<Proyectos>();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Proyectos_all";
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1);
                    string link = dr.GetString(2);
                    string descripcion = dr.GetString(3);
                    string foto = dr.GetString(4);
                    byte[] bytes = File.ReadAllBytes(foto);
                    string imagen = Convert.ToBase64String(bytes);
                    string foto2 = dr.GetString(5);
                    byte[] bytes2 = File.ReadAllBytes(foto2);
                    string imagen2 = Convert.ToBase64String(bytes2);
                    string web = dr.GetString(6);
                    Proyectos proyecto = new Proyectos(id,nombre,link,web,descripcion,foto,imagen,foto2,imagen2);
                    lista.Add(proyecto);
                }
                dr.Close();
                conn.Close();
            }
            return lista;
        }

        public Proyectos GetProyecto(int id)
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            Proyectos proyecto = new Proyectos();
            using(SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Proyecto_get";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", id);
                SqlDataReader dr = cmd.ExecuteReader();

               

                while (dr.Read()) {
                    proyecto.Id = dr.GetInt32(0);
                    proyecto.Nombre = dr.GetString(1);
                    proyecto.Link = dr.GetString(2);
                    proyecto.Descripcion = dr.GetString(3);
                    proyecto.Foto = dr.GetString(4);
                    byte[] bytes = File.ReadAllBytes(proyecto.Foto);
                    proyecto.Imagen = Convert.ToBase64String(bytes);
                    proyecto.Foto2 = dr.GetString(5);
                    byte[] bytes2 = File.ReadAllBytes(proyecto.Foto2);
                    proyecto.Imagen2 = Convert.ToBase64String(bytes2);
                    proyecto.Web = dr.GetString(6);
                }

                dr.Close();
                conn.Close();
                return proyecto;
            }

        }
        public bool addProyecto(Proyectos proyecto)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            proyecto.Foto = HostingEnvironment.MapPath("~/uploads/") + proyecto.Foto;
            proyecto.Foto2 = HostingEnvironment.MapPath("~/uploads/") + proyecto.Foto2;
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Proyecto_add";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@nombre", proyecto.Nombre);
                cmd.Parameters.AddWithValue("@link", proyecto.Link);
                cmd.Parameters.AddWithValue("@descripcion", proyecto.Descripcion);
                cmd.Parameters.AddWithValue("@foto", proyecto.Foto);
                cmd.Parameters.AddWithValue("@foto2", proyecto.Foto2);
                cmd.Parameters.AddWithValue("@web", proyecto.Web);
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
        public bool updateProyecto(int id, Proyectos proyecto)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            proyecto.Foto = HostingEnvironment.MapPath("~/uploads/") + proyecto.Foto;
            proyecto.Foto2 = HostingEnvironment.MapPath("~/uploads/") + proyecto.Foto2;
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Proyecto_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@nombre", proyecto.Nombre);
                cmd.Parameters.AddWithValue("@link", proyecto.Link);
                cmd.Parameters.AddWithValue("@web", proyecto.Web);
                cmd.Parameters.AddWithValue("@descripcion", proyecto.Descripcion);
                cmd.Parameters.AddWithValue("@foto", proyecto.Foto);
                cmd.Parameters.AddWithValue("@foto2", proyecto.Foto2);
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
        public bool deleteProyecto(int id)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Proyecto_delete";
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

