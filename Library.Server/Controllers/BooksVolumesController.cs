using Microsoft.AspNetCore.Mvc;
using Library.Server.Models;
using Library.Server.Clients;

namespace Library.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BooksVolumesController : ControllerBase
    {
        private readonly ILogger<BooksVolumesController> _logger;
        public BooksVolumesController(ILogger<BooksVolumesController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBooksByName")]
        public BooksVolumes GetBooksByName(string name, int num=10)
        {
            BooksVolumesClient client = new BooksVolumesClient();
            BooksVolumes booksVolume = client.GetBooksByName(name, num).Result;
            return booksVolume;
        }


        [HttpGet(Name = "GetBookById")]
        public BookVolume GetBookById(string id)
        {
            BooksVolumesClient client = new BooksVolumesClient();
            BookVolume bookVolume = client.GetBookById(id).Result;
            return bookVolume;
        }

        [HttpGet(Name = "GetBookByParams")]
        public BooksVolumes GetBookByParams(string title="", string author ="")
        {
            BooksVolumesClient client = new BooksVolumesClient();
            try
            {
                BooksVolumes bookVolume = client.GetBookByParams(title, author).Result;
                return bookVolume;

            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }
            return new();
        }

    }
}
