using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using smsapi.Interfaces;
using System;
using System.Data;
using System.Data.SqlClient;
using smsapi.Models;

namespace smsapi.Implementations
{
    public class UserManagementServices : IUserManagementServices
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public UserManagementServices(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        public object GetAllStudents()
        {
            try
            {
                string query = @"select * from dbo.student";
                DataTable dt = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("crudConnection");
                SqlDataReader dr;
                using (SqlConnection con = new SqlConnection(sqlDataSource))
                {
                    con.Open();
                    using (SqlCommand com = new SqlCommand(query, con))
                    {
                        dr=com.ExecuteReader();
                        dt.Load(dr);
                        dr.Close();
                        con.Close();
                    }

                }
                return dt;
            }
            catch (Exception err)
            {
                return err;
            }
            
        }
    }
}
