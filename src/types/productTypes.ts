export interface ProductResponse {
  success: boolean;
  message: string;
  code:    number;
  data:    Products[];
}

export interface Products {
  itinerary_id:                string;
  itinerary_name:              string;
  itinerary_day:               number;
  itinerary_slug:              string;
  partner_name:                string;
  partner_alias:               string;
  itinerary_location:          string;
  itinerary_short_description: string;
  itinerary_long_description:  string;
  morph_class:                 string;
  related_galleries:           RelatedGallery[];
  related_variant:             RelatedVariant;
}

export interface RelatedGallery {
  itinerary_id:     string;
  gallery_id:       number;
  gallery_alt_text: null | string;
  gallery_path:     string;
  src:              string;
  title:            string;
}

export interface RelatedVariant {
  itinerary_id:                 string;
  itinerary_variant_id:         number;
  itinerary_variant_pub_price:  string;
  itinerary_variant_disc_price: string;
  unit_name:                    string;
  related_unit:                 null;
}