
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../Common/Box';
import AddComment from '../Common/AddComment';
import ItemHeader from './ItemHeader';
import ItemButtons from './ItemButtons';
import ItemComment from './ItemComment';
import ItemPhotos from './ItemPhotos';
import { useModalState } from "../../hooks"

export default function Item({ data }) {
  const { setModal } = useModalState();

  const moreClickEvent = () => {
    setModal(true, data);
  };

  return (
    <Box className="feed-item-container flex flex-col">
      <ItemHeader
        image={data.user.image}
        username={data.user.username}
        data={data}
        moreClickEvent={moreClickEvent}
      />
      <ItemPhotos photos={data.photos} />
      <ItemButtons className="feed-item-buttons-container w-full h-10 pl-2 pr-2 mt-2 flex items-center" />
      <Link to="#" className="feed-item-text text-14-bold mr-1 ml-4">
        {data?.likeCount || '0'} likes
      </Link>
      <ItemComment
        data={{ username: data.user.username, description: data.description }}
      />
      <Link to="#"
        className="overflow-hidden mx-4 text-14-light cursor-pointer"
        style={{ color: '#9a9a9a', display: 'flex' }}>
        View all {data.commentCount || '0'} comment(s)
      </Link>
      {data.popularComments.map((item) => (
        <ItemComment
          key={item.username}
          data={{ username: item.username, description: item.description }}
        />
      ))}

      <Link to="#"
        className="feed-item-date-text cursor-pointer uppercase">
        {data.time}
      </Link>
      <AddComment />
    </Box>
  );
}
