using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
//using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Mvc;
using Library.Server.Services;
using Library.Server.Helpers;
using Newtonsoft.Json;
using Library.Server.Models;

namespace Library.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class GoogleOAuthController : Controller
    {

        [HttpGet(Name = "test")]

        public RedirectResult test()
        {
            Dictionary<string, string> result = new Dictionary<string, string>()
            {
                {"name", "miachel"}
            };
            

            return Redirect("/");
        }
        //[HttpGet(Name = "test2")]

        //public async Task Login()
        //{
        //    await HttpContext.ChallengeAsync(GoogleDefaults.AuthenticationScheme,

        //    new AuthenticationProperties

        //    {
        //        RedirectUri = Url.Action("GoogleResponse")

        //    });
        //    //GoogleResponse();
        //}
        [HttpGet(Name = "test3")]

        public async Task<IActionResult> GoogleResponse()
        {
            var result = await HttpContext.AuthenticateAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            var claims = result.Principal.Identities.FirstOrDefault().Claims.Select(claim=> new
            {
                claim.Issuer,
                claim.OriginalIssuer,
                claim.Type,
                claim.Value,
            });
            return Json(claims);
        }

        [HttpGet(Name = "RedirectOnAuthServer")]

        public RedirectResult RedirectOnOAuthServer()
        {
            var scope = "https://www.googleapis.com/auth/books";
            string redirectUrl = "https://localhost:7134/GoogleOAuth/Code";

            string codeVerifier = Guid.NewGuid().ToString();
            string codeChellange = Sha256Helper.ComputeHash(codeVerifier);
            HttpContext.Session.SetString("codeVerifier", codeVerifier);
            Console.WriteLine("First: "+HttpContext.Session.Id);
            var url = GoogleOAuthService.GenerateOAuthRequestUrl(scope, redirectUrl, codeChellange);
            Console.WriteLine(url);
            return Redirect(url);
        }

        [HttpGet(Name = "CodeAsync")]
        public async Task<string> CodeAsync(string code)
        {
            await Console.Out.WriteLineAsync("Second: " + HttpContext.Session.Id);
            string codeVerifier = HttpContext.Session.GetString("codeVerifier");
            string redirectUrl = "https://localhost:7134/GoogleOAuth/Code";
            //await Console.Out.WriteLineAsync("helo");
            var tokenResult = await GoogleOAuthService.ExchangeCodeOnTokenAsync(code, codeVerifier, redirectUrl);

            //var bookShelvesList = BooksService.GetVolumesOnMyBookshelf(tokenResult.AccessToken).Result;

            // Почекаємо 3600 секунд
            // (саме стільки можна використовувати AccessToken, поки його термін придатності не спливе).

            // І оновлюємо Токен Доступу за допомогою Refresh-токена.
            //if(tokenResult.ExpiresIn)
            
            //var refreshedTokenResult = await GoogleOAuthService.RefreshTokenAsync(tokenResult.RefreshToken);

            return "bookShelvesList";
        }
    }
}
