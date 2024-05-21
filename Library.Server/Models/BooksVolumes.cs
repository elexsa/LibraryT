namespace Library.Server.Models
{
    public class BooksVolumes
    {
        public string kind { get; set; }
        public int totalItems { get; set; }
        public BookVolume[] items { get; set; }
    }

}
