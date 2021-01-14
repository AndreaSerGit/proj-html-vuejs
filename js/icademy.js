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
