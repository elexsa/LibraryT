using Library.Server.Models;
using Newtonsoft.Json;
using Library.Server.Helpers;
using Library.Server.Helpers;


namespace Library.Server.Clients
{
    public class BooksVolumesClient
    {
        private static string _address;
        private static string _apiKey;
        private static string _apiHost;

        public BooksVolumesClient()
        {
            _address = Constants.ApiVolumesAddress;
            _apiKey = Constants.ApiKey;

        }

        public async Task<BooksVolumes> GetBooksByName(string name, int num)
        {
            string NameParamAddress = _address + $"?q={name}&maxResults={num}&?key={_apiKey}";
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(NameParamAddress),
            };


            var response = await client.SendAsync(request);

            response.EnsureSuccessStatusCode();
            var body = await response.Content.ReadAsStringAsync();
            //Console.WriteLine(body);

            var result = JsonConvert.DeserializeObject<BooksVolumes>(body);

            return result;

        }

        public async Task<BookVolume> GetBookById(string id)
        {
            string NameParamAddress = $"https://www.googleapis.com/books/v1/volumes/{id}/?key={_apiKey}";
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(NameParamAddress),

            };
            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var body = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<BookVolume>(body);
            return result;
        }

        public async Task<BooksVolumes> GetBookByParams(string title="", string author="")
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

            var result = await HttpClientHelper.SendGetRequest<BooksVolumes>(endpoint, searchParams);
            return result;
        }
    }
}
