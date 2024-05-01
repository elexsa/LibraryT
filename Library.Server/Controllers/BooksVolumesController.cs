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


    }
}
