using Library.Server.Models;
using Newtonsoft.Json;
using Library.Server.Helpers;
using Library.Server.Helpers;


namespace Library.Server.Clients
{
    public class BookVolumesClient
    {
        private static string _address;
        private static string _apiKey;
        private static string _apiHost;

        public BookVolumesClient()
        {
            _address = Constants.ApiVolumesAddress;
            _apiKey = Constants.ApiKey;

        }

        public async Task<BookVolumes> GetBooksByName(string name, int num)
        {


            var @params = new Dictionary<string, string>
            {
                { "q", name },
                { "maxResults", num.ToString() },
                { "key", _apiKey },

            };
            var endpoint = $"https://www.googleapis.com/books/v1/volumes/";

            var result = await HttpClientHelper.SendGetRequest<BookVolumes>(endpoint, @params);
            return result;

        }

        public async Task<BookVolume> GetBookById(string id)
        {
            var @params = new Dictionary<string, string>
            {
                { "key", _apiKey },

            };
            var endpoint = $"https://www.googleapis.com/books/v1/volumes/{id}";

            var result = await HttpClientHelper.SendGetRequest<BookVolume>(endpoint, @params);
            return result;
        }

        public async Task<BookVolumes> GetBookByParams(string title="", string author="")
        {
            string terms = "";
            var endpoint = "https://www.googleapis.com/books/v1/volumes";

            if(title != "")
            {
                terms += "intitle:" + title;
            }
            if(author != "")
            {   
                if(terms != ""){ terms += "+"; }
                terms += "inauthor:" + author;
            }

            
            var searchParams = new Dictionary<string, string>
            {
                { "q", terms },

            };

            var result = await HttpClientHelper.SendGetRequest<BookVolumes>(endpoint, searchParams);
            return result;
        }
    }
}
