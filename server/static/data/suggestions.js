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
    username: 'vietnam',
    image: 'https://picsum.photos/id/888/200/200',
    name: 'Vietnam',
    photo: {
      posts: randomPhotos(0),
      reels: randomPhotos(1),
      tagged: randomPhotos(2)
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
    username: 'alexander',
    name: 'Alexander Tan',
    image: 'https://picsum.photos/id/250/200/200',
    photo: {
      posts: randomPhotos(6),
      reels: randomPhotos(7),
      tagged: randomPhotos(8)
    }
  },
  {
    username: 'hoantran',
    name: 'Hoan Tran',
    image: 'https://picsum.photos/id/236/200/200',
    photo: {
      posts: randomPhotos(9),
      reels: randomPhotos(10),
      tagged: randomPhotos(11)
    }
  },
  {
    username: 'hanoi',
    name: 'Ha Noi',
    image: 'https://picsum.photos/id/227/200/200',
    photo: {
      posts: randomPhotos(12),
      reels: randomPhotos(13),
      tagged: randomPhotos(14)
    }
  },
  {
    username: 'hochiminh',
    name: 'Ho Chi Minh',
    image: 'https://picsum.photos/id/229/200/200',
    photo: {
      posts: randomPhotos(15),
      reels: randomPhotos(16),
      tagged: randomPhotos(17)
    }
  },
];