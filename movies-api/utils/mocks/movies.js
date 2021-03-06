const moviesMock = [
  {
    id: '27015705-0323-45e3-b4d9-de1d02a29941',
    title: 'Taste of Tea, The (Cha no aji)',
    year: 1984,
    cover: 'http://dummyimage.com/206x230.bmp/5fa2dd/ffffff',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 59,
    contentRating: null,
    source: 'http://paginegialle.it/ut.js',
    tags: [
      'Action|Horror|Sci-Fi|War',
      'Drama|Thriller',
      'Horror|Sci-Fi',
      'Documentary'
    ]
  },
  {
    id: '992a22b8-44c5-4b05-9040-081be20f8caf',
    title: 'Elephant Man, The',
    year: 2012,
    cover: 'http://dummyimage.com/212x249.bmp/cc0000/ffffff',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 54,
    contentRating: null,
    source: 'https://spiegel.de/primis/in/faucibus/orci/luctus/et.jsp',
    tags: ['Action|Adventure|Sci-Fi|Thriller']
  },
  {
    id: 'c85cab14-a509-49a7-abea-10e5bc989484',
    title: 'Oz the Great and Powerful',
    year: 1998,
    cover: 'http://dummyimage.com/125x207.png/5fa2dd/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 15,
    contentRating: null,
    source:
      'http://hao123.com/nec/euismod/scelerisque/quam/turpis/adipiscing/lorem.html',
    tags: ['Action|Comedy|Crime|Drama', 'Drama|Thriller', 'Drama']
  },
  {
    id: '48767398-81b3-4a55-93e2-4076e3017bf8',
    title: 'On Probation (Tiempo de Valientes)',
    year: 2008,
    cover: 'http://dummyimage.com/243x109.jpg/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 39,
    contentRating: null,
    source: 'http://furl.net/mattis/nibh/ligula.png',
    tags: ['Action|Adventure|Drama|War', 'Drama']
  },
  {
    id: '8ea03b54-df2c-4990-ad30-7921b5fe1946',
    title: 'Ringer, The',
    year: 2002,
    cover: 'http://dummyimage.com/210x201.bmp/5fa2dd/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 29,
    contentRating: null,
    source: 'https://fc2.com/faucibus/orci.jpg',
    tags: ['Drama', 'Drama', 'Comedy|Fantasy|Romance', 'Drama']
  },
  {
    id: 'b79a8de7-f964-4b0d-bf08-b02aa9621b4e',
    title: 'The Loyal 47 Ronin',
    year: 2006,
    cover: 'http://dummyimage.com/120x183.png/ff4444/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 42,
    contentRating: null,
    source: 'https://harvard.edu/vestibulum.xml',
    tags: ['Adventure|Documentary']
  },
  {
    id: '6a293fc6-34a5-4f9c-958e-3a5fc778650d',
    title: 'Pianomania',
    year: 2002,
    cover: 'http://dummyimage.com/193x157.jpg/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 50,
    contentRating: null,
    source: 'https://zdnet.com/velit/id/pretium.json',
    tags: ['Drama', 'Documentary', 'Documentary', 'Action|Sci-Fi|Thriller']
  },
  {
    id: '6d7debed-66d4-446b-9ce5-0170ce0f5f38',
    title: 'White Fang (Zanna Bianca)',
    year: 1989,
    cover: 'http://dummyimage.com/217x116.bmp/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 11,
    contentRating: null,
    source: 'http://statcounter.com/risus/dapibus/augue/vel.json',
    tags: ['Comedy|Romance|Sci-Fi|Thriller', 'Horror|Thriller', 'Comedy']
  },
  {
    id: 'c72104de-cab8-4b7d-8f70-fbac32411119',
    title: 'Moog',
    year: 2007,
    cover: 'http://dummyimage.com/113x126.jpg/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 88,
    contentRating: null,
    source: 'https://dailymotion.com/enim/in.png',
    tags: ['Comedy']
  },
  {
    id: '30a0bb12-bc53-463b-8d6d-161c57e96896',
    title: 'Sign of Four, The',
    year: 2009,
    cover: 'http://dummyimage.com/130x146.jpg/cc0000/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 40,
    contentRating: null,
    source:
      'http://huffingtonpost.com/dapibus/augue/vel/accumsan/tellus/nisi.js',
    tags: [
      'Children|Drama',
      'Drama',
      'Action|Thriller|War',
      'Comedy|Romance',
      'Documentary'
    ]
  },
  {
    id: 'a2889350-c413-4d8a-9b1c-d54fdccecf17',
    title: 'Near East, The (El Proximo Oriente)',
    year: 2008,
    cover: 'http://dummyimage.com/204x250.jpg/dddddd/000000',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 12,
    contentRating: null,
    source: 'http://constantcontact.com/id/massa/id.html',
    tags: ['Action|Comedy|Crime', 'Action|Drama|Western', 'Comedy']
  },
  {
    id: '1994ae85-36d1-49f5-91b6-9fd28c4040bc',
    title: 'Casino Jack',
    year: 1991,
    cover: 'http://dummyimage.com/225x243.jpg/ff4444/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 74,
    contentRating: null,
    source: 'http://usnews.com/molestie/sed.jsp',
    tags: ['Comedy', 'Animation|Children|Comedy|Fantasy']
  },
  {
    id: '18964db9-993f-439a-ae09-7260a32cb5a7',
    title: 'Annie Get Your Gun',
    year: 2005,
    cover: 'http://dummyimage.com/244x152.bmp/5fa2dd/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 49,
    contentRating: null,
    source: 'https://irs.gov/augue/aliquam/erat/volutpat.xml',
    tags: [
      'Documentary',
      'Adventure|Comedy|Romance',
      '(no genres listed)',
      'Comedy|Drama'
    ]
  },
  {
    id: '1ea6c4fd-a720-4d1e-a642-557ef7fafff8',
    title: 'Document of the Dead',
    year: 1994,
    cover: 'http://dummyimage.com/116x147.bmp/5fa2dd/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 8,
    contentRating: null,
    source: 'https://ow.ly/luctus/et/ultrices/posuere/cubilia/curae.png',
    tags: ['Fantasy|Horror|Thriller']
  },
  {
    id: 'b3c89deb-2c8d-4304-9a7c-0603c7fc0121',
    title: 'Sometime in August (Mitte Ende August)',
    year: 2009,
    cover: 'http://dummyimage.com/185x127.bmp/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 31,
    contentRating: null,
    source: 'http://nbcnews.com/pede/ullamcorper/augue.json',
    tags: ['Drama', 'Drama']
  },
  {
    id: '3c95ab25-73a8-466c-aa9a-c0f844421f67',
    title: 'Cookie',
    year: 2003,
    cover: 'http://dummyimage.com/221x128.png/dddddd/000000',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 33,
    contentRating: null,
    source: 'https://unesco.org/blandit.png',
    tags: ['Musical', 'Adventure|Comedy|Crime']
  },
  {
    id: '389646ca-ba76-4e06-b297-d11c22c07c45',
    title: 'Sid and Nancy',
    year: 1992,
    cover: 'http://dummyimage.com/242x120.png/ff4444/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    duration: 14,
    contentRating: null,
    source: 'http://salon.com/dolor/sit/amet/consectetuer.xml',
    tags: [
      'Drama',
      'Crime|Horror|Mystery',
      'Comedy|Horror|Thriller',
      'Comedy|Romance'
    ]
  },
  {
    id: '9ab631e9-ef40-4a21-9099-bf507c2adc18',
    title: 'Browning Version, The',
    year: 2004,
    cover: 'http://dummyimage.com/158x220.bmp/ff4444/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 27,
    contentRating: null,
    source: 'http://guardian.co.uk/rhoncus/aliquet.aspx',
    tags: ['Comedy|Drama', 'Action|Drama']
  },
  {
    id: 'b65ef5a1-a168-4b73-911e-b698a544ef72',
    title: 'Girls Against Boys ',
    year: 2006,
    cover: 'http://dummyimage.com/141x173.bmp/dddddd/000000',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    duration: 26,
    contentRating: null,
    source: 'http://biglobe.ne.jp/nisi/venenatis/tristique.html',
    tags: ['(no genres listed)', 'Drama|Fantasy|Thriller|War']
  },
  {
    id: '058c940f-dc3b-4c81-8939-a7fe1214cc09',
    title: 'Cookout, The',
    year: 2007,
    cover: 'http://dummyimage.com/236x145.bmp/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 65,
    contentRating: null,
    source: 'http://wix.com/ante/vel/ipsum/praesent/blandit.png',
    tags: [
      'Comedy|Drama',
      'Children|Comedy|Drama',
      'Comedy|Romance',
      'Comedy',
      'Drama'
    ]
  },
  {
    id: '4fc32957-88d9-430c-a48d-ce64b8099942',
    title: 'Out of the Fog',
    year: 1985,
    cover: 'http://dummyimage.com/138x197.png/dddddd/000000',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 43,
    contentRating: null,
    source: 'http://mit.edu/justo/in/hac/habitasse.xml',
    tags: ['Drama', 'Documentary']
  },
  {
    id: '79744a65-7b3c-46ac-b40a-df8cc3f59ab8',
    title: 'Men of Means',
    year: 1992,
    cover: 'http://dummyimage.com/225x227.jpg/5fa2dd/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 83,
    contentRating: null,
    source: 'http://narod.ru/quisque/arcu/libero/rutrum/ac.html',
    tags: ['(no genres listed)', 'Crime|Thriller']
  },
  {
    id: 'b4a8f7dc-dc29-437f-9cd7-a7e0ca0a516f',
    title: 'Favorite Deadly Sins',
    year: 2003,
    cover: 'http://dummyimage.com/174x229.jpg/5fa2dd/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 34,
    contentRating: null,
    source: 'http://newyorker.com/et/ultrices/posuere/cubilia.html',
    tags: ['Drama']
  },
  {
    id: 'bc61755b-5675-4f03-b4c6-4d87e38d24cb',
    title: 'Cage aux Folles, La',
    year: 1985,
    cover: 'http://dummyimage.com/180x243.jpg/cc0000/ffffff',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 96,
    contentRating: null,
    source: 'https://nationalgeographic.com/nullam.aspx',
    tags: ['Comedy|Drama']
  },
  {
    id: 'f16153bb-cb27-4ec8-946e-a7d4b79ded00',
    title: 'Me, Myself & Irene',
    year: 2001,
    cover: 'http://dummyimage.com/105x248.jpg/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 46,
    contentRating: null,
    source: 'http://hao123.com/ridiculus/mus.json',
    tags: [
      'Horror|Sci-Fi|Thriller',
      'Crime|Drama|Mystery',
      'Comedy|Drama',
      'Drama'
    ]
  },
  {
    id: '424d837d-c54a-4703-9569-7d3fd2950272',
    title: 'Halo 4: Forward Unto Dawn',
    year: 1994,
    cover: 'http://dummyimage.com/185x147.jpg/ff4444/ffffff',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    duration: 84,
    contentRating: null,
    source: 'https://opera.com/est/risus/auctor/sed/tristique/in.jpg',
    tags: ['Adventure|Children|War', 'Comedy|Drama']
  },
  {
    id: 'cf69fcbc-90db-4bd3-8830-779a79ae7d08',
    title: 'Gunner Palace',
    year: 1992,
    cover: 'http://dummyimage.com/122x184.png/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 51,
    contentRating: null,
    source: 'http://weebly.com/erat/id/mauris/vulputate/elementum.jpg',
    tags: ['Comedy', 'Comedy', 'Action|Crime|Drama']
  },
  {
    id: '1bbbba54-bbe7-45b7-adb1-303f8b1f92b0',
    title: 'Horseman on the Roof, The (Hussard sur le toit, Le)',
    year: 2004,
    cover: 'http://dummyimage.com/154x108.jpg/5fa2dd/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    duration: 79,
    contentRating: null,
    source: 'https://shinystat.com/feugiat/non.jpg',
    tags: ['Drama|Mystery']
  },
  {
    id: '181377fb-1c4f-4417-995e-98d0cc2b13d3',
    title: 'All the Little Animals',
    year: 2008,
    cover: 'http://dummyimage.com/170x179.jpg/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 64,
    contentRating: null,
    source: 'http://about.com/in/sapien/iaculis/congue/vivamus/metus/arcu.png',
    tags: ['Drama', 'Film-Noir|Mystery', 'Western', 'Drama', 'Drama|Fantasy']
  },
  {
    id: '0f7bba53-d33c-4fc7-901c-4c41964ecb97',
    title: 'Garage Olimpo',
    year: 2012,
    cover: 'http://dummyimage.com/179x115.png/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 31,
    contentRating: null,
    source: 'https://nifty.com/lorem/integer/tincidunt/ante.json',
    tags: ['Drama', 'Comedy', 'Drama', 'Crime|Drama|Thriller']
  }
];

function filterMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies () {
    return Promise.resolve(moviesMock);
  }

  async createMovie () {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filterMoviesMock,
  MoviesServiceMock
};
