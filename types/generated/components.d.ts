import type { Schema, Struct } from '@strapi/strapi';

export interface CardServiceCardService extends Struct.ComponentSchema {
  collectionName: 'components_card_service_card_services';
  info: {
    displayName: 'Card Service';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['phone', 'email', 'location']>;
    items: Schema.Attribute.Component<'contact-page.contact-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactPageContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_contact_items';
  info: {
    displayName: 'contact-item';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface ContactPageFormfield extends Struct.ComponentSchema {
  collectionName: 'components_contact_page_formfields';
  info: {
    displayName: 'formfield';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'phone', 'date', 'time', 'textarea']
    >;
  };
}

export interface FooterOffice extends Struct.ComponentSchema {
  collectionName: 'components_footer_offices';
  info: {
    displayName: 'office';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface LocationLocation extends Struct.ComponentSchema {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
  };
}

export interface ProjectCategoryProjects extends Struct.ComponentSchema {
  collectionName: 'components_project_category_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    name: Schema.Attribute.String;
    ProjectStatus: Schema.Attribute.Enumeration<['completed', 'ongoing']>;
  };
}

export interface ServiceBullet extends Struct.ComponentSchema {
  collectionName: 'components_service_bullets';
  info: {
    displayName: 'Bullet';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ServiceFaq extends Struct.ComponentSchema {
  collectionName: 'components_service_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks;
    Question: Schema.Attribute.String;
  };
}

export interface ServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_service_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Body: Schema.Attribute.Blocks;
    bullets: Schema.Attribute.Component<'service.bullet', true>;
    Heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card-service.card-service': CardServiceCardService;
      'contact-info.contact-info': ContactInfoContactInfo;
      'contact-page.contact-item': ContactPageContactItem;
      'contact-page.formfield': ContactPageFormfield;
      'footer.office': FooterOffice;
      'location.location': LocationLocation;
      'project-category.projects': ProjectCategoryProjects;
      'service.bullet': ServiceBullet;
      'service.faq': ServiceFaq;
      'service.section': ServiceSection;
    }
  }
}
