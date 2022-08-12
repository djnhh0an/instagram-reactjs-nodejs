import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Common/Layout';
import Stories from '../components/Stories/Stories';
import Item from '../components/Feeds/Item';
import MoreModalItems from '../components/Common/MoreModal';
import { useSuggestionState, useUserState } from '../hooks';
import Service from '../services';

function Home() {
  const { setLoginUser } = useUserState();
  const { setSuggestions } = useSuggestionState();

  const [profile, setProfile] = useState(null);
  const [stories, setStories] = useState(null);
  const [feeds, setFeeds] = useState(null);

  const updateLoginUser = (data) => {
    setLoginUser(data);
    setProfile(data);
  };

  useEffect(() => {
    Service.getProfile().then((data) => updateLoginUser(data));
    Service.getFeeds().then((data) => setFeeds(data));
    Service.getStories().then((data) => setStories(data));
    Service.getSuggestions().then((data) => setSuggestions(data))
  }, []);

  if (!profile) return null;

  return (
    <Layout user={profile}>
      <MoreModalItems />
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        {stories && <Stories stories={stories} />}
        {feeds && feeds.map((item) => <Item data={item} key={item.pid} />)}
      </div>
    </Layout>
  );
}
export default Home;
