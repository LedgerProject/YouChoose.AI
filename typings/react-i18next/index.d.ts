import 'react-i18next';

declare module 'react-i18next' {
  export interface CustomTypeOptions {
    resources: {
      title: string;
      common: {
        coming_soon: string;
      };
      actions: {
        add: string;
        delete: string;
        clear: string;
        editThisVideo: string;
        importVideos: string;
        addToCurrentVideo: string;
        removeFromCurrentVideo: string;
        compare: string;
        related: string;
      };
      account: {
        channel: string;
        channelVideos: string;
      };
      creator: {
        title: string;
      };
      community: {
        title: string;
      };
      youtube: {
        title: string;
      };
      recommendations: {
        title: string;
        total: string;
        url: string;
        yours: string;
      };
      dashboard: {
        title: string;
      };
      popup: {
        version: string;
      };
      statistics: {
        title: string;
      };
      settings: {
        contentCreatorRecommendationLabel: string;
        contentCreatorRecommendationHint: string;
        communityRecommendationsLabel: string;
        communityRecommendationsHint: string;
        contributeToIndipendentStatsLabel: string;
        contributeToIndipendentStatsHint: string;
      };
      videos: {
        no_results: string;
        no_selected: string;
        no_video_id: string;
      };
      collaborativeAnalytics: {
        faq_1_question: string;
        faq_2_question: string;
        faq_3_question: string;
        faq_4_question: string;
      };
      ytVideoPage: {
        firstTab: string;
        secondTab: string;
        thirdTab: string;
      };
    };
  }
}