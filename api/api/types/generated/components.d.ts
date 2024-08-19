import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksMainPageStore extends Schema.Component {
  collectionName: 'components_blocks_main_page_stores';
  info: {
    displayName: 'mainPageStore';
  };
  attributes: {
    title: Attribute.String;
    products: Attribute.Relation<
      'blocks.main-page-store',
      'oneToMany',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.main-page-store': BlocksMainPageStore;
    }
  }
}
