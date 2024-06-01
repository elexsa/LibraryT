using Microsoft.AspNetCore.Mvc;
using Library.Server.Models;
using Library.Server.Clients;
using Library.Server.Database;

namespace Library.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BookvolumesController : ControllerBase
    {
        private readonly ILogger<BookvolumesController> _logger;
        public BookvolumesController(ILogger<BookvolumesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBooksByName")]
        public BookVolumes GetBooksByName(string name, int num=10)
        {
            BookVolumesClient client = new BookVolumesClient();
            BookVolumes booksVolume = client.GetBooksByName(name, num).Result;
            return booksVolume;
        }


        [HttpGet(Name = "GetBookById")]
        public BookVolume GetBookById(string id)
        {
            BookVolumesClient client = new BookVolumesClient();
            BookVolume bookVolume = client.GetBookById(id).Result;
            return bookVolume;
        }

        [HttpGet(Name = "GetBookByParams")]
        public BookVolumes GetBookByParams(string title = "", string author = "", string publisher = "", string subject = "", string isbn = "")
        {
            BookVolumesClient client = new BookVolumesClient();
            try
            {
                BookVolumes bookVolume = client.GetBookByParams(title, author, publisher, subject, isbn).Result;
                return bookVolume;

            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }
            return new();
        }

    }
}
