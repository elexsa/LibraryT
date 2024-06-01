namespace Library.Server.Models
{
    public class BookVolumes
    {
        public string kind { get; set; }
        public int totalItems { get; set; }
        public BookVolume[] items { get; set; }
    }

}
