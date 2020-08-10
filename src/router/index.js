import React from 'react';
import { Redirect } from 'react-router-dom';

import ZLMine from '@/pages/mine';
import ZLFriends from '@/pages/friends';

import ZLDiscover from '@/pages/discover';
import ZLRecommend from '@/pages/discover/c-pages/recommend'
import ZLAlbum from '@/pages/discover/c-pages/album';
import ZLDJRadio from '@/pages/discover/c-pages/djradio';
import ZLArtist from '@/pages/discover/c-pages/artist';
import ZLRanking from '@/pages/discover/c-pages/ranking';
import ZLSongs from '@/pages/discover/c-pages/songs';



const routes = [
  {
    path:"/",
    exact:true,
    render: () => (
      <Redirect to="/discover/recommend"/>
    )
  },

  {
    path: "/discover",
    component: ZLDiscover,

    
    routes: [
    { 
      path: "/discover",
      exact: true,
      render: () => (
        <Redirect to="/discover/recommend"/>
      )
    },
    {
      path: "/discover/recommend",
      component: ZLRecommend
    },
    {
      path: "/discover/album",
      component: ZLAlbum
    },
    {
      path: "/discover/artist",
      component: ZLArtist
    },
    {
      path: "/discover/ranking",
      component: ZLRanking
    },
    {
      path: "/discover/djradio",
      component: ZLDJRadio
    },
    {
      path: "/discover/songs",
      component:ZLSongs
    }
    ]
  },
  {
    path: "/mine",
    component: ZLMine
  },
  {
    path: "/friends",
    component: ZLFriends
  }
];


export default routes;