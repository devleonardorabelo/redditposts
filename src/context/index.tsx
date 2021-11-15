import React, {useContext, createContext, useState, useCallback} from 'react';
import request from '../services';
import {Post} from '../types';

type PostTypes = 'hot' | 'new' | 'rising' | 'top';
interface RedditContextData {
  newPosts: Post[];
  topPosts: Post[];
  popularPosts: Post[];
  hotPosts: Post[];
  loadPosts: (type: PostTypes) => void;
  loading: boolean;
}

export const RedditContext = createContext<RedditContextData>(
  {} as RedditContextData,
);

type ContextProps = {
  children: React.ReactNode;
};

const RedditProvider = ({children}: ContextProps) => {
  const [newPosts, setNewPosts] = useState<Post[]>([]);
  const [topPosts, setTopPosts] = useState<Post[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);
  const [hotPosts, setHotPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const handlePostTypes = useCallback((type: PostTypes, posts: Post[]) => {
    switch (type) {
      case 'new':
        setNewPosts(posts);
        break;
      case 'top':
        setTopPosts(posts);
        break;
      case 'rising':
        setPopularPosts(posts);
        break;
      default:
        setHotPosts(posts);
        break;
    }
  }, []);

  const loadPosts = useCallback(async (type: PostTypes) => {
    setLoading(true);

    const response = await request({
      url: `https://api.reddit.com/r/pics/${type}`,
      method: 'GET',
    });
    if (response.data?.error) {
      return;
    } else {
      handlePostTypes(type, response.data.children);
    }

    setLoading(false);
  }, []);

  return (
    <RedditContext.Provider
      value={{newPosts, topPosts, popularPosts, hotPosts, loadPosts, loading}}>
      {children}
    </RedditContext.Provider>
  );
};

const useReddit = () => useContext(RedditContext);

export {RedditProvider, useReddit};

const teste = {
  all_awardings: [
    {
      award_sub_type: 'GLOBAL',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 100,
      coin_reward: 0,
      count: 36,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: "Shows the Silver Award... and that's it.",
      end_date: null,
      giver_coin_reward: null,
      icon_format: null,
      icon_height: 512,
      icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png',
      icon_width: 512,
      id: 'gid_1',
      is_enabled: true,
      is_new: false,
      name: 'Silver',
      penny_donate: null,
      penny_price: null,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 512,
      static_icon_url:
        'https://www.redditstatic.com/gold/awards/icon/silver_512.png',
      static_icon_width: 512,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'GLOBAL',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 500,
      coin_reward: 100,
      count: 1,
      days_of_drip_extension: 0,
      days_of_premium: 7,
      description:
        'Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.',
      end_date: null,
      giver_coin_reward: null,
      icon_format: null,
      icon_height: 512,
      icon_url: 'https://www.redditstatic.com/gold/awards/icon/gold_512.png',
      icon_width: 512,
      id: 'gid_2',
      is_enabled: true,
      is_new: false,
      name: 'Gold',
      penny_donate: null,
      penny_price: null,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 512,
      static_icon_url:
        'https://www.redditstatic.com/gold/awards/icon/gold_512.png',
      static_icon_width: 512,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'GLOBAL',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 150,
      coin_reward: 0,
      count: 27,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: 'Thank you stranger. Shows the award.',
      end_date: null,
      giver_coin_reward: null,
      icon_format: null,
      icon_height: 2048,
      icon_url:
        'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png',
      icon_width: 2048,
      id: 'award_f44611f1-b89e-46dc-97fe-892280b13b82',
      is_enabled: true,
      is_new: false,
      name: 'Helpful',
      penny_donate: null,
      penny_price: null,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 2048,
      static_icon_url:
        'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png',
      static_icon_width: 2048,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'GLOBAL',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 125,
      coin_reward: 0,
      count: 25,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: 'When you come across a feel-good thing.',
      end_date: null,
      giver_coin_reward: null,
      icon_format: null,
      icon_height: 2048,
      icon_url:
        'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png',
      icon_width: 2048,
      id: 'award_5f123e3d-4f48-42f4-9c11-e98b566d5897',
      is_enabled: true,
      is_new: false,
      name: 'Wholesome',
      penny_donate: null,
      penny_price: null,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 2048,
      static_icon_url:
        'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png',
      static_icon_width: 2048,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'PREMIUM',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 30,
      coin_reward: 0,
      count: 2,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: 'A glowing commendation for all to see',
      end_date: null,
      giver_coin_reward: null,
      icon_format: 'APNG',
      icon_height: 2048,
      icon_url:
        'https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png',
      icon_width: 2048,
      id: 'award_b4ff447e-05a5-42dc-9002-63568807cfe6',
      is_enabled: true,
      is_new: false,
      name: 'All-Seeing Upvote',
      penny_donate: null,
      penny_price: null,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 2048,
      static_icon_url:
        'https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png',
      static_icon_width: 2048,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'GLOBAL',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 100,
      coin_reward: 0,
      count: 2,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: 'I needed this today',
      end_date: null,
      giver_coin_reward: 0,
      icon_format: 'PNG',
      icon_height: 2048,
      icon_url:
        'https://i.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png',
      icon_width: 2048,
      id: 'award_19860e30-3331-4bac-b3d1-bd28de0c7974',
      is_enabled: true,
      is_new: false,
      name: 'Heartwarming',
      penny_donate: 0,
      penny_price: 0,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 2048,
      static_icon_url:
        'https://i.redd.it/award_images/t5_22cerq/v1mxw8i6wnf51_Heartwarming.png',
      static_icon_width: 2048,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
    {
      award_sub_type: 'PREMIUM',
      award_type: 'global',
      awardings_required_to_grant_benefits: null,
      coin_price: 20,
      coin_reward: 0,
      count: 1,
      days_of_drip_extension: 0,
      days_of_premium: 0,
      description: "Can't stop seeing stars",
      end_date: null,
      giver_coin_reward: 0,
      icon_format: 'APNG',
      icon_height: 512,
      icon_url:
        'https://www.redditstatic.com/gold/awards/icon/Starstruck_512.png',
      icon_width: 512,
      id: 'award_abb865cf-620b-4219-8777-3658cf9091fb',
      is_enabled: true,
      is_new: false,
      name: 'Starstruck',
      penny_donate: 0,
      penny_price: 0,
      resized_icons: [Array],
      resized_static_icons: [Array],
      start_date: null,
      static_icon_height: 512,
      static_icon_url:
        'https://i.redd.it/award_images/t5_22cerq/snotiq9vxyn51_Starstruck.png',
      static_icon_width: 512,
      subreddit_coin_reward: 0,
      subreddit_id: null,
      tiers_by_required_awardings: null,
    },
  ],
  allow_live_comments: true,
  approved_at_utc: null,
  approved_by: null,
  archived: false,
  author: 'ShantyMick',
  author_flair_background_color: '',
  author_flair_css_class: 'C1',
  author_flair_richtext: [],
  author_flair_template_id: null,
  author_flair_text: '',
  author_flair_text_color: 'dark',
  author_flair_type: 'text',
  author_fullname: 't2_bl1odkzz',
  author_is_blocked: false,
  author_patreon_flair: false,
  author_premium: true,
  awarders: [],
  banned_at_utc: null,
  banned_by: null,
  can_gild: false,
  can_mod_post: false,
  category: null,
  clicked: false,
  content_categories: ['photography'],
  contest_mode: false,
  created: 1636921563,
  created_utc: 1636921563,
  discussion_type: null,
  distinguished: null,
  domain: 'i.imgur.com',
  downs: 0,
  edited: false,
  gilded: 1,
  gildings: {gid_1: 36, gid_2: 1},
  hidden: false,
  hide_score: false,
  id: 'qtyl9j',
  is_created_from_ads_ui: false,
  is_crosspostable: false,
  is_meta: false,
  is_original_content: false,
  is_reddit_media_domain: false,
  is_robot_indexable: true,
  is_self: false,
  is_video: false,
  likes: null,
  link_flair_background_color: '',
  link_flair_css_class: null,
  link_flair_richtext: [],
  link_flair_text: null,
  link_flair_text_color: 'dark',
  link_flair_type: 'text',
  locked: false,
  media: null,
  media_embed: {},
  media_only: false,
  mod_note: null,
  mod_reason_by: null,
  mod_reason_title: null,
  mod_reports: [],
  name: 't3_qtyl9j',
  no_follow: false,
  num_comments: 1983,
  num_crossposts: 4,
  num_reports: null,
  over_18: false,
  parent_whitelist_status: 'all_ads',
  permalink: '/r/pics/comments/qtyl9j/61_years_ago_today/',
  pinned: false,
  post_hint: 'image',
  preview: {enabled: true, images: [[Object]]},
  pwls: 6,
  quarantine: false,
  removal_reason: null,
  removed_by: null,
  removed_by_category: null,
  report_reasons: null,
  saved: false,
  score: 63654,
  secure_media: null,
  secure_media_embed: {},
  selftext: '',
  selftext_html: null,
  send_replies: true,
  spoiler: false,
  stickied: false,
  subreddit: 'pics',
  subreddit_id: 't5_2qh0u',
  subreddit_name_prefixed: 'r/pics',
  subreddit_subscribers: 28243841,
  subreddit_type: 'public',
  suggested_sort: null,
  thumbnail:
    'https://b.thumbs.redditmedia.com/by_rcjivwxwus7v87ovFeXz4kOrVmeZTEMB-IdxnckU.jpg',
  thumbnail_height: 140,
  thumbnail_width: 140,
  title: '61 Years Ago Today',
  top_awarded_type: 'ACTIVE',
  total_awards_received: 94,
  treatment_tags: [],
  ups: 63654,
  upvote_ratio: 0.9,
  url: 'https://i.imgur.com/nQKp06t.jpg',
  url_overridden_by_dest: 'https://i.imgur.com/nQKp06t.jpg',
  user_reports: [],
  view_count: null,
  visited: false,
  whitelist_status: 'all_ads',
  wls: 6,
};
