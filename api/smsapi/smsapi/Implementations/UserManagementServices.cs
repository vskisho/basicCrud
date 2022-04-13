using System.Data;

namespace smsapi.Implementations
{
    public class UserManagementServices
    {

        public object GetAllStudents()
        {
            try
            {
                string query = @"select * from student";
                DataTable dt = new DataTable();
            }
        }
    }
}
