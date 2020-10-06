const mockIDVideos = {
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'Jiak50jVoJ9_Uscl6Dwcb7VySqI',
      id: 'nmXMgqjQzls',
      snippet: {
        publishedAt: '2019-09-30T23:54:32Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        description:
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-09-30T23:54:32Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '0Yrs6aTmQBUVQ7UajRtJfcx2wuQ',
      id: 'HYyRZiwBWc8',
      snippet: {
        publishedAt: '2019-04-18T18:48:04Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
        description:
          'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-04-18T18:48:04Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'a2ExHLTDnNLRPLgMY8KOQkPhIdc',
      id: 'aKuPmY2m1Ro',
      snippet: {
        publishedAt: '2019-12-27T20:47:29Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline&#39;s 2019 Year in Review',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-12-27T20:47:29Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'wysdfEjSt1pSNriP5j0Q2RpAOTU',
      id: '772_6g1rMN8',
      snippet: {
        publishedAt: '2016-09-01T18:23:39Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Spotlight: Meet the Wizeline Mexico Team (We&#39;re Hiring!)',
        description:
          'Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2016-09-01T18:23:39Z',
      },
    },
  ],
};

const mockVideos = {
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'Jiak50jVoJ9_Uscl6Dwcb7VySqI',
      id: {
        kind: 'youtube#video',
        videoId: 'nmXMgqjQzls',
      },
      snippet: {
        publishedAt: '2019-09-30T23:54:32Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        description:
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-09-30T23:54:32Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '0Yrs6aTmQBUVQ7UajRtJfcx2wuQ',
      id: {
        kind: 'youtube#video',
        videoId: 'HYyRZiwBWc8',
      },
      snippet: {
        publishedAt: '2019-04-18T18:48:04Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
        description:
          'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-04-18T18:48:04Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'a2ExHLTDnNLRPLgMY8KOQkPhIdc',
      id: {
        kind: 'youtube#video',
        videoId: 'aKuPmY2m1Ro',
      },
      snippet: {
        publishedAt: '2019-12-27T20:47:29Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline&#39;s 2019 Year in Review',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-12-27T20:47:29Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'wysdfEjSt1pSNriP5j0Q2RpAOTU',
      id: {
        kind: 'youtube#video',
        videoId: '772_6g1rMN8',
      },
      snippet: {
        publishedAt: '2016-09-01T18:23:39Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Spotlight: Meet the Wizeline Mexico Team (We&#39;re Hiring!)',
        description:
          'Meet a few people from our awesome Wizeline Mexico Team: Dafne, Isabel, Fernando, Alejandro, Vivi, Alejandra, Liusha and Vidal.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/772_6g1rMN8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2016-09-01T18:23:39Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'tzWPWelB5bMlYM6Sw3qf7Lk7Hkg',
      id: {
        kind: 'youtube#video',
        videoId: 'DcFK1x3NHGY',
      },
      snippet: {
        publishedAt: '2016-09-01T18:02:11Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
        description:
          "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2016-09-01T18:02:11Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '4lmSnJ7SFZVf6HkqQJ9a6heTjSk',
      id: {
        kind: 'youtube#video',
        videoId: 'cjO2fJy8asM',
      },
      snippet: {
        publishedAt: '2018-09-25T17:45:19Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'A Day in the Life of an Engineering Manager at Wizeline',
        description:
          "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2018-09-25T17:45:19Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'O65nNtAypWrgY1yFdUiirdR_uuo',
      id: {
        kind: 'youtube#video',
        videoId: '24sTHUyWhRM',
      },
      snippet: {
        publishedAt: '2016-10-05T00:03:32Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: '[1 of 2] Wizeline CEO shares career lessons from Google',
        description:
          'Founder & CEO Bismarck Lepe on growth opportunities at Wizeline and his career-path experience as an early Google employee. Join our team!',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/24sTHUyWhRM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/24sTHUyWhRM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/24sTHUyWhRM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2016-10-05T00:03:32Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'LgWQy4-kjbj_G2ve5Urr4vHFuck',
      id: {
        kind: 'youtube#video',
        videoId: 'Nss3EmTDD3s',
      },
      snippet: {
        publishedAt: '2017-12-08T18:13:27Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Why Wizeline?',
        description:
          'Hear from our employees directly about what excites them about their roles here at Wizeline. Wizeline wants to hire the best and the brightest to accelerate their ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2017-12-08T18:13:27Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'h-gxIFbRRhPpn_oldO-6FmLijJs',
      id: {
        kind: 'youtube#video',
        videoId: 'elEAnqU8KuY',
      },
      snippet: {
        publishedAt: '2020-08-31T20:05:52Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Build your Future with Wizeline&#39;s Apprenticeship Programs',
        description:
          "We believe that tech education has the power to change anyone's future. Wizeline Academy runs apprenticeship programs that are based on a ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/elEAnqU8KuY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/elEAnqU8KuY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/elEAnqU8KuY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2020-08-31T20:05:52Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '_rPgXi8-dTFID2YT_omyg8y4730',
      id: {
        kind: 'youtube#video',
        videoId: 'UTsBkhu-UGw',
      },
      snippet: {
        publishedAt: '2018-11-16T17:40:24Z',
        channelId: 'UCvaUAVzIIGsRNlUDWkQFCeA',
        title: 'AWS Wizeline Founders Campaign - Capítulo 1 - Emprendedor',
        description:
          'https://aws.amazon.com/es/campaigns/founders/ Quieres saber más? Contáctenos: https://bit.ly/2G3ZbTE.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/UTsBkhu-UGw/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Amazon Web Services Latin America',
        liveBroadcastContent: 'none',
        publishTime: '2018-11-16T17:40:24Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'bBqyCkAcOu_IXJ0nyiaf7Nl4k-Q',
      id: {
        kind: 'youtube#video',
        videoId: 'E1Vq_A3WKK8',
      },
      snippet: {
        publishedAt: '2017-12-09T18:46:07Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'How does Wizeline work?',
        description:
          'Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2017-12-09T18:46:07Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'okUoPJk53189maAhh-WjNrOWQOQ',
      id: {
        kind: 'youtube#video',
        videoId: 'Po3VwR_NNGk',
      },
      snippet: {
        publishedAt: '2019-03-05T03:52:55Z',
        channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
        title: 'Wizeline hace sentir a empleados como en casa',
        description:
          'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'El Economista TV',
        liveBroadcastContent: 'none',
        publishTime: '2019-03-05T03:52:55Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'mS_cKob5d1B_5p0L2FoB7ISs1Ns',
      id: {
        kind: 'youtube#channel',
        channelId: 'UCBEH2Cf8rH4Ly2kkSCklLHQ',
      },
      snippet: {
        publishedAt: '2020-01-16T18:28:00Z',
        channelId: 'UCBEH2Cf8rH4Ly2kkSCklLHQ',
        title: 'Wizeline Academy',
        description: '',
        thumbnails: {
          default: {
            url:
              'https://yt3.ggpht.com/-TQQEXsOxUuI/AAAAAAAAAAI/AAAAAAAAAAA/LrIEIz-Ovxc/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
          },
          medium: {
            url:
              'https://yt3.ggpht.com/-TQQEXsOxUuI/AAAAAAAAAAI/AAAAAAAAAAA/LrIEIz-Ovxc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg',
          },
          high: {
            url:
              'https://yt3.ggpht.com/-TQQEXsOxUuI/AAAAAAAAAAI/AAAAAAAAAAA/LrIEIz-Ovxc/s800-c-k-no-mo-rj-c0xffffff/photo.jpg',
          },
        },
        channelTitle: 'Wizeline Academy',
        liveBroadcastContent: 'none',
        publishTime: '2020-01-16T18:28:00Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'MHD0J6Fyumdl5OSqSqmDfnDX1cg',
      id: {
        kind: 'youtube#video',
        videoId: 'PrZHBTv3fjw',
      },
      snippet: {
        publishedAt: '2019-10-30T20:56:02Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline&#39;s Got Talent 2019 | Life at Wizeline',
        description:
          "This year we hosted the 2nd annual Wizeline's Got Talent to give our team the chance to show off their after-hours skills and passions. If you want to work at a ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/PrZHBTv3fjw/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-10-30T20:56:02Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'X4in1VlFRnY9XDQL3CyYNNAXiZw',
      id: {
        kind: 'youtube#video',
        videoId: '4CiR1jXOL0k',
      },
      snippet: {
        publishedAt: '2018-08-10T17:32:25Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'How to Build Your Dream Career with Wizeline',
        description: 'Build your career at Wizeline. Apply: http://bit.ly/2nu9GVQ.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/4CiR1jXOL0k/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2018-08-10T17:32:25Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'XeL7vr8oiU9QHeWfXVuGFD7WZKw',
      id: {
        kind: 'youtube#video',
        videoId: 'xFnk0ZxIrIE',
      },
      snippet: {
        publishedAt: '2017-01-04T23:10:30Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Learn UX Design Fundamentals with Wizeline UX Academy',
        description:
          'Wizeline UX Academy is a 6 week course that develops select students into UX Designers via a thorough foundation in UX principles and tools. Students have ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/xFnk0ZxIrIE/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2017-01-04T23:10:30Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'GVejRy4423BOWADkj4fahPVuSVY',
      id: {
        kind: 'youtube#video',
        videoId: 'iszLGKZeFsk',
      },
      snippet: {
        publishedAt: '2019-03-05T18:13:40Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline&#39;s Guadalajara Campus',
        description:
          "Wizeline's state-of-the-art campus in Guadalajara, Mexico, has the capacity for 700 employees. The facility is designed to foster collaboration with remote teams, ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/iszLGKZeFsk/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/iszLGKZeFsk/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/iszLGKZeFsk/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-03-05T18:13:40Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'CD_lN9dl_ibCn4ZbpuQmB3NIJRA',
      id: {
        kind: 'youtube#video',
        videoId: 't_O_dnmfgrA',
      },
      snippet: {
        publishedAt: '2019-03-29T23:30:43Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Learn about our DevOps practice (And join our SRE Trainee program!)',
        description:
          'At Wizeline, DevOps is a culture, not just a role. See how we help our clients deliver their products faster through development, networking, security, and ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/t_O_dnmfgrA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/t_O_dnmfgrA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/t_O_dnmfgrA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-03-29T23:30:43Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'j80iE5-GEJ3vL6cEL1n_NCU17c8',
      id: {
        kind: 'youtube#video',
        videoId: 'CH-MZqccTko',
      },
      snippet: {
        publishedAt: '2019-07-09T21:04:49Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title:
          'Wizeline Founder &amp; CEO Bismarck Lepe: Scaling our team culture to APAC',
        description:
          "We're proud of the culture we've built at Wizeline, the people we've hired to achieve our vision, and the companies we have the opportunity to work with every ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/CH-MZqccTko/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/CH-MZqccTko/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/CH-MZqccTko/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-07-09T21:04:49Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'YfRuVlEPVhZq8zpdUBK0CTBkqrQ',
      id: {
        kind: 'youtube#video',
        videoId: 'NP1gAnbeNno',
      },
      snippet: {
        publishedAt: '2019-11-12T20:45:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title:
          'Wizeline Querétaro | Mexico&#39;s New Knowledge Economy (We&#39;re hiring!)',
        description:
          'A small but mighty (and growing) team, the Queretaro crew has taken ownership of growing the office and brand, speaking at university events, hosting tech ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/NP1gAnbeNno/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/NP1gAnbeNno/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/NP1gAnbeNno/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-11-12T20:45:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'zyHfExhdzS1oPNMsWMhCEly4Raw',
      id: {
        kind: 'youtube#video',
        videoId: 'YuW0CE_8i1I',
      },
      snippet: {
        publishedAt: '2018-12-13T21:51:39Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline Thrives in Mexico City',
        description:
          'Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2018-12-13T21:51:39Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'zN0qVwtvorD2Vb_LkUF4LFTZiDw',
      id: {
        kind: 'youtube#video',
        videoId: '8xCVIhEircY',
      },
      snippet: {
        publishedAt: '2015-06-16T20:42:52Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Welcome to Wizeline',
        description:
          "Watch a quick overview of Wizeline's product management platform. Don't have an account? Sign up for free at wizeline.com.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/8xCVIhEircY/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/8xCVIhEircY/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/8xCVIhEircY/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2015-06-16T20:42:52Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'EDQWLSOCwnO5BQ7TcjFlDBhFkg0',
      id: {
        kind: 'youtube#video',
        videoId: 'hAHMYwYFHgc',
      },
      snippet: {
        publishedAt: '2015-08-20T05:22:42Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title:
          'Measuring the Impact of Product Strategy: Wizeline&#39;s SVP of Sales &amp; Customer Success',
        description:
          'Trenton Truitt gives a real-world example outlining the challenges involved in making big product strategy decisions: the knowns, unknowns, tradeoffs and ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hAHMYwYFHgc/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hAHMYwYFHgc/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/hAHMYwYFHgc/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2015-08-20T05:22:42Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'KfKg_9q0cBKWLYXP5hYJuItJ7MI',
      id: {
        kind: 'youtube#video',
        videoId: 'WKolloYx7Gw',
      },
      snippet: {
        publishedAt: '2018-07-25T20:59:37Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline&#39;s Got Talent',
        description:
          "Wizeliners are very talented. From rock bands to sports teams, we're proud of our people and all the skills they bring to Wizeline. Join us and show us your ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/WKolloYx7Gw/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/WKolloYx7Gw/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/WKolloYx7Gw/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2018-07-25T20:59:37Z',
      },
    },
  ],
};

export { mockIDVideos, mockVideos };
