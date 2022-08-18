using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace portfolio1.Models
{
    public class GestorLogin
    {
        
        public List<User> getUser( Login login)
        {
            List<User> lista = new List<User>();
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();
            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "User_get";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@username", login.Username);
                cmd.Parameters.AddWithValue("@password", login.Password);

                cmd.ExecuteNonQuery();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    string username = dr.GetString(1);
                    string password = dr.GetString(2);
                    string rol = dr.GetString(3);
                    User user = new User(username, password, rol);
                    lista.Add(user);
                }
                dr.Close();
                conn.Close();   
            }
            return lista;
        }
    }
}