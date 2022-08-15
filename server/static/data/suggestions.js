function randomPhotos(random = 0) {
  return [
    {
      img: `https://picsum.photos/600/600?random=${random + 1}`,
      title: 'photo1',
    }, {
      img: `https://picsum.photos/600/600?random=${random + 2}`,
      title: 'photo2',
    },
    {
      img: `https://picsum.photos/600/600?random=${random + 3}`,
      title: 'photo3',
    },
    {
      img: `https://picsum.photos/600/600?random=${random + 4}`,
      title: 'photo4',
    },
    {
      img: `https://picsum.photos/600/600?random=${random + 5}`,
      title: 'photo5',
    },
    {
      img: `https://picsum.photos/600/600?random=${random + 6}`,
      title: 'photo6',
    }
  ]
}

export const suggestions = [
  {
    username: '#autum',
    name: '#autum',
    image: 'https://picsum.photos/id/301/200/200',
    isHashtag: true,
    photo: {
      hashtags: [
        {
          img: 'https://picsum.photos/id/301/600/600',
          title: 'photo1',
        },
        {
          img: 'https://picsum.photos/id/302/600/600',
          title: 'photo2',
        },
        {
          img: 'https://picsum.photos/id/307/600/600',
          title: 'photo4',
        }
        ,
        {
          img: 'https://picsum.photos/id/304/600/600',
          title: 'photo4',
        },
        {
          img: 'https://picsum.photos/id/305/600/600',
          title: 'photo5',
        },
        {
          img: 'https://picsum.photos/id/306/600/600',
          title: 'photo6',
        }
      ]
    }
  },
  {
    username: '#nicephoto',
    name: '#nicephoto',
    image: 'https://picsum.photos/id/120/200/200',
    isHashtag: true,
    photo: {
      hashtags: [
        {
          img: 'https://picsum.photos/id/120/600/600',
          title: 'photo1',
        },
        {
          img: 'https://picsum.photos/id/800/600/600',
          title: 'photo2',
        },
        {
          img: 'https://picsum.photos/id/700/600/600',
          title: 'photo3',
        },
        {
          img: 'https://picsum.photos/id/600/600/600',
          title: 'photo4',
        },
        {
          img: 'https://picsum.photos/id/600/600/600',
          title: 'photo5',
        }
      ]
    }
  },
  {
    username: '#reactjs',
    name: '#reactjs',
    image: 'https://picsum.photos/id/123/200/200',
    isHashtag: true,
    photo: {
      hashtags: [
        {
          img: 'https://picsum.photos/id/123/600/600',
          title: 'photo1',
        },
        {
          img: 'https://picsum.photos/id/211/600/600',
          title: 'photo2',
        },
        {
          img: 'https://picsum.photos/id/304/600/600',
          title: 'photo3',
        },
        {
          img: 'https://picsum.photos/id/305/600/600',
          title: 'photo4',
        }
      ]
    }
  },
  {
    username: 'israel',
    name: 'Israel',
    image: 'https://picsum.photos/id/239/200/200',
    photo: {
      posts: randomPhotos(3),
      reels: randomPhotos(4),
      tagged: randomPhotos(5)
    }
  },
  {
    username: 'vietnam',
    image: 'https://picsum.photos/id/888/200/200',
    name: 'Vietnam',
    photo: {
      posts: randomPhotos(0),
      reels: randomPhotos(1),
      tagged: randomPhotos(2)
    }
  }
];