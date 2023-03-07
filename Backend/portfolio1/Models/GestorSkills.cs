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
    public class GestorSkills
    {
        public List<Skills> getSkills()
        {
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            List<Skills> lista = new List<Skills>();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Skill_all";
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    int  id = dr.GetInt32(0);
                    string skillname = dr.GetString(1);
                    int dominio = dr.GetInt32(2);
                    string foto = dr.GetString(3);
                    string img = "";
                    byte[] bytes = File.ReadAllBytes(foto);
                    img = Convert.ToBase64String(bytes);
                    string tipo = dr.GetString(4);
                    Skills skill = new Skills(id,skillname,dominio,tipo,foto, img);
                    lista.Add(skill);
                }
                dr.Close();
                conn.Close();
            }
            return lista;
        }

        public Skills getSkill(int id)
        {
            Skills skill = new Skills();
            string strConn = ConfigurationManager.ConnectionStrings["BDlocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Skill_get";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);

                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    skill.Id = dr.GetInt32(0);
                    skill.Skillname = dr.GetString(1);
                    skill.Dominio = dr.GetInt32(2);
                    skill.Foto = dr.GetString(3);
                    byte[] bytes = File.ReadAllBytes(skill.Foto);
                    skill.Imagen= Convert.ToBase64String(bytes);
                    skill.Tipo = dr.GetString(4);
                }

                dr.Close();
                conn.Close();

                return skill;
            }
        }

        public bool addSkill(Skills skill)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            skill.Foto = HostingEnvironment.MapPath("~/uploads/") + skill.Foto;
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Skill_add";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@nombre", skill.Skillname);
                cmd.Parameters.AddWithValue("@dominio", skill.Dominio);
                cmd.Parameters.AddWithValue("@foto", skill.Foto);
                cmd.Parameters.AddWithValue("@tipo", skill.Tipo);
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

        public bool updateSkill(int id, Skills skill)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            skill.Foto = HostingEnvironment.MapPath("~/uploads/") + skill.Foto;
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Skill_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@nombre", skill.Skillname);
                cmd.Parameters.AddWithValue("@dominio", skill.Dominio);
                cmd.Parameters.AddWithValue("@foto", skill.Foto);
                cmd.Parameters.AddWithValue("@tipo", skill.Tipo);

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
        public bool deleteSkill(int id)
        {
            bool res = false;
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Skills_delete";
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