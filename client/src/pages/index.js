import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Common/Layout';
import Stories from '../components/Stories/Stories';
import Item from '../components/Feed/Item';
import MoreModalItems from '../components/Common/MoreModal';
import { useUserState } from '../hooks';

function Home() {
  const { setLoginUser } = useUserState();

  const [profile, setProfile] = useState(null);
  const [stories, setStories] = useState(null);
  const [feed, setFeed] = useState(null);

  const updateLoginUser = (data) => {
    setLoginUser(data);
    setProfile(data);
  };

  useEffect(() => {
    fetch('/api/profile')
      .then((response) => response.json())
      .then((data) => updateLoginUser(data));
  }, []);

  useEffect(() => {
    fetch('/api/feed')
      .then((response) => response.json())
      .then((data) => setFeed(data));
  }, []);

  useEffect(() => {
    fetch('/api/stories')
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  if (!profile) return null;

  return (
    <Layout user={profile}>
      <MoreModalItems />
      <div className="homepage-feed lg:mr-8 flex flex-col ">
        {stories && <Stories stories={stories} />}
        {feed && feed.map((item) => <Item data={item} key={item.pid} />)}
      </div>
    </Layout>
  );
}
export default Home;
