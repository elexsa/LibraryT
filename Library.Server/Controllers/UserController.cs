using Microsoft.AspNetCore.Mvc;
using Library.Server.Models;
using Library.Server.Clients;
using Library.Server.Database;


namespace Library.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserRepository _userRepository;

        private readonly ILogger<UsersController> _logger;
        public UsersController(ILogger<UsersController> logger, UserRepository userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);
            if (existingUser != null)
            {
                return Conflict("User already exists.");
            }

            _userRepository.CreateUser(user);
            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);
            if (existingUser == null || existingUser.Password != user.Password)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(existingUser);
        }
    }
}
