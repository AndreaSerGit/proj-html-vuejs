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
      ],
      peoples: [
        {
          image: 'img/testimonials-standard-2.png',
          name: 'Joan Collins',
          state: 'STUDENT',
          text: '"Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet marius. Morbi accumsan ispum velit. Nam nec tellus."'
        },
        {
          image: 'img/testimonials-standard-6.png',
          name: 'Molly Simon',
          state: 'TEACHER',
          text: '"Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet marius. Morbi accumsan ispum velit. Nam nec tellus."'
        },
        {
          image: 'img/testimonials-standard-1.png',
          name: 'Virginia Foster',
          state: 'STUDENT',
          text: '"Mroin gravida nibh vel veliauctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nivulputate cursus a sit amet marius. Morbi accumsan ispum velit. Nam nec tellus."'
        }

      ],
      listResult: [
        {
          name: 'What We Do',
          title: 'Learning Possibilities',
          image: 'img/h12-tabs-icon-1.png'
        },
        {
          name: 'Degree Programme',
          title: 'Inspiring Minds',
          image: 'img/h12-tabs-icon-2.png'
        },
        {
          name: 'Career Achievements',
          title: 'Investing in Knowledge',
          image: 'img/h12-tabs-icon-3.png'
        },
        {
          name: 'Personal Management',
          title: 'Secure Your Future',
          image: 'img/h12-tabs-icon-4.png'
        },
        {
          name: 'Steps to Success',
          title: 'Where Learning Begins',
          image: 'img/h12-tabs-icon-5.png'
        },
        {
          name: 'Knowledge Transfer',
          title: 'Knowledge is Power',
          image: 'img/h12-tabs-icon-6.png'
        },
      ],
      listIndex: 0,
      peopleIndex: 0,
      classFade: false,
      autoPlay: '',
    },
    created: function() {
      this.autoPlay = setInterval(
        () => {
          this.nextImage();
        }, 6000
      )

    },
    methods: {
        goToImage: function(newIndex) {

          clearInterval(this.autoPlay)
          setTimeout(function() {
            app.classFade = 'fade-in';
            app.peopleIndex = newIndex;
          }, 500)
          app.classFade = false;
        },
        goToSection: function(newIndex) {

            this.listIndex = newIndex;
        },
        nextImage: function() {

        setTimeout(function() {
          app.classFade = 'fade-in';
          app.peopleIndex++;
          if(app.peopleIndex == app.peoples.length) {
            app.peopleIndex = 0;
          }
        }, 500)
        app.classFade = false;

      },
     scrollToTop: function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }

      }
   ,
    mounted: function() {

    },

  }
)
