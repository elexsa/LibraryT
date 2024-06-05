using Library.Server.Database;
using Library.Server.Helpers;
using Library.Server.Models;
using Microsoft.AspNetCore.Mvc;


namespace Library.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserRepository _userRepository;
        private readonly JwtHelper _jwtHelper;
        private readonly ILogger<UsersController> _logger;
        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        public UsersController(UserRepository userRepository, JwtHelper jwtHelper)
        {
            _userRepository = userRepository;
            _jwtHelper = jwtHelper;
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);
            if (existingUser != null)
            {
                return Conflict("User already exists.");
            }

            _userRepository.CreateUser(user);

            return Ok(new { token = _jwtHelper.GenerateToken(user.Email), user });
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);
            if (existingUser == null || existingUser.Password != user.Password)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(new { token = _jwtHelper.GenerateToken(existingUser.Email), user = existingUser });
        }

        [HttpPost("AddBookToFav")]
        public async Task<IActionResult> AddBookToFav(string userId, [FromBody]SmallBookOverview book)
        {
            var existingUser = _userRepository.GetUserById(userId);
            if (existingUser == null)
            {
                return Unauthorized("Sory, invalid user.");
            }
            var existingBook = _userRepository.GetBooksByUserAsync(userId).Result.Exists(storedBook => storedBook.Id == book.Id);
            if (existingBook)
            {
                return BadRequest(book.Title+" is already exists");
            }
            await _userRepository.AddBookToUserAsync(userId, book);
            return Ok();
        }

        [HttpDelete("DelBookFromFav")]
        public async Task<IActionResult> DelBookFromFav(string userId, SmallBookOverview book)
        {
            var existingUser = _userRepository.GetUserById(userId);
            if (existingUser == null)
            {
                return Unauthorized("Sory, invalid user.");
            }
            if (existingUser.FavBooks.Count > 0)
            {
                await _userRepository.RemoveBookFromUserAsync(userId, book);
                return Ok();
            }
            return BadRequest("There is no books in list.");
            
        }

        [HttpGet("GetBooksByUser")]
        public async Task<IActionResult> GetBooksByUser(string userId)
        {
            var existingUser = _userRepository.GetUserById(userId);
            if (existingUser == null)
            {
                return Unauthorized("Sory, invalid user.");
            }

            var result = await _userRepository.GetBooksByUserAsync(userId);

            return Ok(result);
        }
    }
}
