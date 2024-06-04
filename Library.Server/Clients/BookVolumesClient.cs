using Library.Server.Models;
using Newtonsoft.Json;
using Library.Server.Helpers;
using Library.Server.Helpers;


namespace Library.Server.Clients
{
    public class BookVolumesClient
    {
        private static string _apiKey;


        public BookVolumesClient()
        {
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

        public async Task<BookVolumes> GetBookByParams(string title="", string author="",  string publisher = "", string subject = "", string isbn = "")
        {
            List<string> terms = new List<string>();
            var endpoint = "https://www.googleapis.com/books/v1/volumes";

            if(title != "")
            {
                terms.Add("intitle:" + title);
            }
            if(author != "")
            {
                terms.Add("inauthor:" + author);
            }
            if (publisher != "")
            {
                terms.Add("inpublisher:" + publisher);
            }
            if (subject != "")
            {
                terms.Add("subject:" + subject);
            }
            if (isbn != "")
            {
                terms.Add("isbn:" + isbn);
            }



            var searchParams = new Dictionary<string, string>
            {
                { "q", string.Join("+", terms) },

            };
            await Console.Out.WriteLineAsync(string.Join("+", terms));
            var result = await HttpClientHelper.SendGetRequest<BookVolumes>(endpoint, searchParams);
            return result;
        }
    }
}
