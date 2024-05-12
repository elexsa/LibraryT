using Library.Server.Models;
using Newtonsoft.Json;


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
            string NameParamAddress = $"{_address}{id}/?key={_apiKey}";
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(NameParamAddress)
            };
            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var body = await response.Content.ReadAsStringAsync();
            var result = JsonConvert.DeserializeObject<BookVolume>(body);
            return result;
        }
    }
}
