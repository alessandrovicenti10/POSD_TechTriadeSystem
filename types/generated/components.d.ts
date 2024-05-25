import type { Schema, Attribute } from '@strapi/strapi';

export interface PagePropertiesExample extends Schema.Component {
  collectionName: 'components_page_properties_examples';
  info: {
    displayName: 'EXAMPLE';
    icon: 'search';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaTag: Attribute.Component<'page-properties.meta-tag', true>;
  };
}

export interface PagePropertiesMetaTag extends Schema.Component {
  collectionName: 'components_page_properties_meta_tags';
  info: {
    displayName: 'MetaTag';
    icon: 'code';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-properties.example': PagePropertiesExample;
      'page-properties.meta-tag': PagePropertiesMetaTag;
    }
  }
}
