namespace Library.Server.Models
{
    public class BookshelvesList
    {

        public string kind { get; set; }
        public Item[] items { get; set; }


        public class Item
        {
            public string kind { get; set; }
            public int id { get; set; }
            public string selfLink { get; set; }
            public string title { get; set; }
            public string access { get; set; }
            public DateTime updated { get; set; }
            public DateTime created { get; set; }
            public int volumeCount { get; set; }
            public DateTime volumesLastUpdated { get; set; }
        }

    }
}
