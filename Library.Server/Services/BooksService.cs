using Library.Server.Helpers;
using Library.Server.Models;
using Newtonsoft;
using Newtonsoft.Json;

namespace Library.Server.Services
{
    public class BooksService
    {
        public static async Task<BookshelvesList> GetVolumesOnMyBookshelf(string accessToken)
        {
            var bookshelfApiEndpoint = "https://www.googleapis.com/books/v1/mylibrary/bookshelves";
            var shelfParams = new Dictionary<string, string>
            {
                { "key", Constants.ApiKey },
            };
            var requestResult = await HttpClientHelper.SendGetRequest<BookshelvesList>(bookshelfApiEndpoint, shelfParams, accessToken);
            var list = JsonConvert.SerializeObject(requestResult);
            return requestResult;
        }


    }
}
