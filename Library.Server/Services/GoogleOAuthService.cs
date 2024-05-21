using Library.Server.Helpers;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;
using System.Text.Json.Serialization;

namespace Library.Server.Services
{
    public class GoogleOAuthService
    {
        private const string ClientId = "112383829383-puhoirnfaatkvtps1k44pc7ec42ojgit.apps.googleusercontent.com";
        private const string ClientSecret = "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";


        public static string GenerateOAuthRequestUrl(string scope, string redirectUrl, string codeChellange)
        {
            var oAuthServerEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
            
            var queryParams = new Dictionary<string, string>
            {
                {"client_id", ClientId},
                { "redirect_uri",  redirectUrl},
                { "response_type", "code" },
                { "scope", scope },
                { "code_challenge", codeChellange },
                { "code_challenge_method", "S256" },
                { "access_type", "offline" }
            };

            var url = QueryHelpers.AddQueryString(oAuthServerEndpoint, queryParams);
            return url;
        }

        public static async Task<TokenResult> ExchangeCodeOnTokenAsync(string code, string codeVerifier, string redirectUrl)
        {
            var tokenEndpoint = "https://oauth2.googleapis.com/token";
            var authParams = new Dictionary<string, string>
            {
                { "client_id", ClientId },
                { "client_secret", ClientSecret },
                { "code", code },
                { "code_verifier", codeVerifier },
                { "grant_type", "authorization_code" },
                { "redirect_uri", redirectUrl }
            };

            var tokenResult = await HttpClientHelper.SendPostRequest<TokenResult>(tokenEndpoint, authParams);
            return tokenResult;
        }

        public static async Task<TokenResult> RefreshTokenAsync(string refreshToken)
        {
            string refreshEndpoint = "https://oauth2.googleapis.com/token";
            var refreshParams = new Dictionary<string, string>
            {
                { "client_id", ClientId },
                { "client_secret", ClientSecret },
                { "grant_type", "refresh_token" },
                { "refresh_token", refreshToken }
            };

            var tokenResult = await HttpClientHelper.SendPostRequest<TokenResult>(refreshEndpoint, refreshParams);

            return tokenResult;
        }


    }
}
