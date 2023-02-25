using Microsoft.AspNetCore.Mvc;
using VueAppNetCore.Models;

namespace VueAppNetCore.Controllers
{
    public class ClientesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult GetClientes()
        {
            //List<Cliente> clientes = new Cliente().GetClientes();
            //return Json(clientes);
            return null;
        }
    }
}
