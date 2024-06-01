using Microsoft.AspNetCore.Mvc;
using Library.Server.Models;
using Library.Server.Clients;
using Library.Server.Database;

namespace Library.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BookshelvesController : ControllerBase
    {
        private readonly ILogger<BookshelvesController> _logger;
        public BookshelvesController(ILogger<BookshelvesController> logger)
        {
            _logger = logger;
        }


        [HttpPost(Name = "PostVolumeToShelf")]
        public BookVolume PostVolumeToShelf(string id, string bookshelfName)
        {
            
            return new();
        }

    }
}
