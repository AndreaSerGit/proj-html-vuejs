var app = new Vue(
  {
    el: '#container',
    data: {
      listaLinkHeader: [
        {
          name: 'HOME',
          link: 'file:///C:/Users/Andre/Desktop/Boolean/Lavori/proj-html-vuejs/index.html'
        },
        {
          name: 'COURSES',
          link: 'https://iacademy.qodeinteractive.com/courses/all-courses/'
        },
        {
          name: 'INSTRUCTORS',
          link: 'https://iacademy.qodeinteractive.com/become-an-instructor/'
        },
        {
          name: 'EVENTS',
          link: 'https://iacademy.qodeinteractive.com/events/2021-07/'
        },
        {
          name: 'PAGES',
          link: 'https://iacademy.qodeinteractive.com/about/'
        },
        {
          name: 'ELEMENTS',
          link: 'https://iacademy.qodeinteractive.com/elements/course-list/'
        }

      ],
      listaLinkSupport: [
        {
          name: 'User dashboard',
          link: 'www.dashboard.com'
        },
        {
          name: 'Contact Us',
          link: 'www.contactus.com'
        },
        {
          name: 'FAQ',
          link: 'www.faq.com'
        },
        {
          name: 'Course Offer',
          link: 'www.offer.com'
        },
        {
          name: 'Events',
          link: 'www.events.com'
        }
      ],
      listaPersonale: [
        {
          corso: 'Business English',
          name: 'Preston Marshall'
        },
        {
          corso: 'Social Computing',
          name: 'David Sanders'
        },
        {
          corso: 'Learn Spanish',
          name: 'Jennie King'
        },
      ],
      imageBox: [
        {
          image: 'img/h5-custom-icon-1.png',
          name: 'Languages'
        },
        {
          image: 'img/h5-custom-icon-2.png',
          name: 'Software'
        },
        {
          image: 'img/h5-custom-icon-3.png',
          name: 'Business'
        },
        {
          image: 'img/h5-custom-icon-4.png',
          name: 'Chemistry'
        },
        {
          image: 'img/h5-custom-icon-5.png',
          name: 'Science'
        },
        {
          image: 'img/h5-custom-icon-6.png',
          name: 'DIY&Craft'
        },
      ],
      cards: [
        {
          image:  'img/course-5-f-img.jpg',
          name: 'David Sanders',
          course: 'Android Developer',
          text: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
          cost: 'FREE',
          avatar: '1',
          sign: 'PROGRAMMING'
        },
        {
          image:  'img/course-6-f-img.jpg',
          name: 'Jennifer Powell',
          course: 'Web Designing',
          text: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
          cost: 'FREE',
          avatar: '1',
          sign: 'PROGRAMMING'
        },
        {
          image:  'img/course-7-f-img.jpg',
          name: 'Edward Bowman',
          course: 'Financial Modeling',
          text: 'Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores petentium no sea, atqui posidonium interpretaris.',
          cost: '$20',
          avatar: '1',
          sign: 'BUSINESS'
        }
      ],
      marks: [
        {
          image: 'img/h5-client-5.png'
        },
        {
          image: 'img/h5-client-1.png'
        },
        {
          image: 'img/h5-client-2.png'
        },
        {
          image: 'img/h5-client-1.png'
        },
      ]


    },
    created: function() {

    },
    methods: {

      }
   ,
    mounted: function() {

    },

  }
)
