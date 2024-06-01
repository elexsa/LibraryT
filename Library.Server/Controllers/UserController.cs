// Controllers/UsersController.cs

using Library.Server.Database;
using Library.Server.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Library.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserRepository _userRepository;
        private readonly JwtHelper _jwtHelper;

        public UsersController(UserRepository userRepository, JwtHelper jwtHelper)
        {
            _userRepository = userRepository;
            _jwtHelper = jwtHelper;
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
            return Ok(new { token = _jwtHelper.GenerateToken(user.Email), user });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = _userRepository.GetUserByEmail(user.Email);
            if (existingUser == null || existingUser.Password != user.Password)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(new { token = _jwtHelper.GenerateToken(existingUser.Email), user = existingUser });
        }
    }
}
