namespace Library.Server.Models
{

    public class BookVolume
    {
        public string kind { get; set; }
        public string id { get; set; }
        public string etag { get; set; }
        public string selfLink { get; set; }
        public Volumeinfo volumeInfo { get; set; }
        public Layerinfo layerInfo { get; set; }
        public Saleinfo saleInfo { get; set; }
        public Accessinfo accessInfo { get; set; }
    }

    public class Dimensions
    {
        public string height { get; set; }
    }



        
    public class Layerinfo
    {
        public Layer[] layers { get; set; }
    }

    public class Layer
    {
        public string layerId { get; set; }
        public string volumeAnnotationsVersion { get; set; }
    }

        

    public class Listprice
    {
        public float amount { get; set; }
        public string currencyCode { get; set; }
    }

    public class Retailprice
    {
        public float amount { get; set; }
        public string currencyCode { get; set; }
    }

    public class Offer
    {
        public int finskyOfferType { get; set; }
        public Listprice1 listPrice { get; set; }
        public Retailprice1 retailPrice { get; set; }
    }

    public class Listprice1
    {
        public int amountInMicros { get; set; }
        public string currencyCode { get; set; }
    }

    public class Retailprice1
    {
        public int amountInMicros { get; set; }
        public string currencyCode { get; set; }
    }

       

    
}
