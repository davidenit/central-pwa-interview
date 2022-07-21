import { gql } from '@apollo/client';

export const CategoryFragment = gql`
    # eslint-disable-next-line @graphql-eslint/require-id-when-available
    fragment CategoryFragment on CategoryTree {
        uid
        meta_title
        meta_keywords
        meta_description
    }
`;

export const ProductsFragment = gql`
    fragment ProductsFragment on Products {
        items {
            id
            uid
            name
            price_range {
                maximum_price {
                    final_price {
                        currency
                        value
                    }
                    regular_price {
                        currency
                        value
                    }
                    discount {
                        amount_off
                    }
                }
            }
            sku
            small_image {
                url
            }
            stock_status
            rating_summary
            __typename
            url_key
            color
            fashion_size
            fashion_material
            fashion_color
            fashion_style
            accessory_brand
        }
        page_info {
            total_pages
        }
        total_count
    }
`;
