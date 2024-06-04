import type { Schema, Attribute } from '@strapi/strapi';

export interface AccreditationAccreditations extends Schema.Component {
  collectionName: 'components_accreditation_accreditations';
  info: {
    displayName: 'Accreditations&Awards';
    description: '';
  };
  attributes: {
    image1: Attribute.String;
    image2: Attribute.String;
    image3: Attribute.String;
    image4: Attribute.String;
    image5: Attribute.String;
    image6: Attribute.String;
  };
}

export interface AccreditationReviews extends Schema.Component {
  collectionName: 'components_accreditation_reviews';
  info: {
    displayName: 'Reviews&Security';
    description: '';
  };
  attributes: {
    image1: Attribute.String;
    image2: Attribute.String;
    image3: Attribute.String;
    image4: Attribute.String;
    image5: Attribute.String;
    image6: Attribute.String;
  };
}

export interface SupportPageBanner extends Schema.Component {
  collectionName: 'components_support_page_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.String;
    button: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface SupportPageChangelog extends Schema.Component {
  collectionName: 'components_support_page_changelogs';
  info: {
    displayName: 'Changelog';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface SupportPageContactUs extends Schema.Component {
  collectionName: 'components_support_page_contactuses';
  info: {
    displayName: 'ContactUs';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface SupportPageQuestionsSession extends Schema.Component {
  collectionName: 'components_support_page_questions_sessions';
  info: {
    displayName: 'QuestionsSession';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    button1: Attribute.String;
    buttonUrl1: Attribute.String;
    button2: Attribute.String;
    buttonUrl2: Attribute.String;
    button3: Attribute.String;
    buttonUrl3: Attribute.String;
    question1: Attribute.String;
    answer1: Attribute.Text;
    question2: Attribute.String;
    answer2: Attribute.Text;
    question3: Attribute.String;
    answer3: Attribute.Text;
    question4: Attribute.String;
    answer4: Attribute.Text;
    question5: Attribute.String;
    answer5: Attribute.Text;
    question6: Attribute.String;
    answer6: Attribute.Text;
    question7: Attribute.String;
    answer7: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accreditation.accreditations': AccreditationAccreditations;
      'accreditation.reviews': AccreditationReviews;
      'support-page.banner': SupportPageBanner;
      'support-page.changelog': SupportPageChangelog;
      'support-page.contact-us': SupportPageContactUs;
      'support-page.questions-session': SupportPageQuestionsSession;
    }
  }
}
