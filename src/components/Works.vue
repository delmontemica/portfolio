<template>
  <v-container id="works" style="min-height: 100vh;">
    <div class="mt-5" style="text-align: center"
      data-aos="zoom-in">
      <span class="skills-title">Works</span>
    </div>
    <v-layout row>
      <v-flex
        xs12
        sm12
        md8 offset-md2
        lg8 offset-lg2>
        <v-layout 
          row
          pt-10
        >
          <v-flex 
            xs12
            sm12
            md6
            lg4
            xl4
            pa-5
            v-for="(i, index) in works"
            :key="index"
            data-aos="zoom-out-right"
          >
            <v-hover
              v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="mx-auto"
                @click="openDialog(i)"
              >
                <v-img
                  :src="i.image"
                  height="300px"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out red darken-4 v-card--reveal display-3 white--text"
                      style="height: 100%; padding: 10px; text-align: center"
                    >
                      <span class="overline">{{i.title}} ⁠— {{i.subtitle}}</span>
                    </div>
                  </v-expand-transition>
                </v-img>
                
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <WorkModal 
      :modal='showDialog'
      :item='dialogItem'
      @close='closeDialog()'
    />
    
  </v-container>
</template>

<script>
import WorkModal from '@/components/WorkModal.vue';
  export default {
    data: () => ({
      showDialog: false,
      dialogItem: {},
      works: [
        {
          image: require('@/assets/okutara.png'),
          title: 'OKUTARA',
          subtitle: 'A blogging inbound website that showcases the experiences of travelers who traveled to Okutama, Tokyo',
          description: 'Okutara is an inbound tourism website for Okutama, Japan. This system is a project created for our Japanese class in Okutama Japanese Language School (Also Bridge Institute of Technology). It uses the PHP framework Laravel.',
          role: 'UI/UX Designer / Frontend Developer',
          category: 'Web Development',
          languages: 'PHP (Laravel), HTML, CSS (SASS), JavaScript, MySQL',
          tools: 'Visual Studio Code, InVision, GitKraken',
          github: null,
          link: null,
          note: 'Github repository is undisclosed due to privacy settings. Link will be updated once project is published.'
        },
        {
          image: require('@/assets/babel.png'),
          title: 'Babel Method',
          subtitle: 'A Japanese E-Learning system for foreign employees of Jellyfish Inc.',
          description: 'Babel Method is a Japanese Language E-Learning system designed to cater to international employees. It is an in-house language learning system for foreigners working in the company. The system uses the VueJS framework for frontend and NodeJS for backend. ',
          role: 'Frontend Developer',
          category: 'Web Development',
          languages: 'HTML, CSS (SASS), JavaScript (VueJS Framework, NodeJS)',
          tools: 'Visual Studio Code, GitKraken',
          github: null,
          link: null,
          note: 'Github repository is undisclosed due to privacy settings. Link will be updated once project is published.'
        },
        {
          image: require('@/assets/spring.png'),
          title: 'Spring Term Final Presentation: List of Projects Pamphlet',
          subtitle: 'A pamphlet design for the list of projects to be presented during the spring final term presentation in Bridge Institute of Technology',
          description: 'The Okutama Japanese Language School hosts a presentation where the town people of Okutama is invited to listen and give feedbacks to the different projects created and presented by the students. This pamphlet shows the list of projects presented on the day of the presentation so that the audience will know the basic details of the projects.',
          role: 'Graphic Designer',
          category: 'Graphic Design',
          languages: 'N/A',
          tools: 'Adobe Photoshop',
          github: null,
          link: null,
          note: 'Github unavailable because it is a graphic design project.'
        },
        {
          image: require('@/assets/kodomo.png'),
          title: 'Okutama Kodomo Daisakusen Recruitment Pamphlet',
          subtitle: 'A pamphlet design for the recruitment of members for the Okutama Kodomo Daisakusen event in Okutama, Tokyo',
          description: 'The goal of the pamphlet is to recruit members from Tokyo Denki University who may be willing to participate in hosting and facilitating the event in Okutama, called the Okutama Kodomo Daisakusen.',
          role: 'Graphic Designer',
          category: 'Graphic Design',
          languages: 'N/A',
          tools: 'Adobe Photoshop',
          github: null,
          link: null,
          note: 'Github unavailable because it is a graphic design project.'
        },
        {
          image: require('@/assets/dnus.png'),
          title: 'DNUS',
          subtitle: 'Online recruitment service for companies who want to hire foreigners in Japan.',
          description: 'DNUS is a service owned by DOC Inc. It is a recruitment system for foreigners who may be interested to work in Japan. This system used Ruby on Rails PHP framework.',
          role: 'Frontend developer',
          category: 'Web Development',
          languages: 'PHP (Ruby on Rails), HTML (HAML), CSS (SASS), Javascript/CoffeeScript, MySQL',
          tools: 'Visual Studio Code, InVision, GitKraken',
          github: null,
          link: 'https://dnus.jp/',
          note: 'Github repository is undisclosed due to privacy settings.'
        },
        {
          image: require('@/assets/rio.png'),
          title: 'Online Resort Reservation and Billing System',
          subtitle: 'Web-based online reservation and billing system for Rio Villa Nuevo Mineral Water Resort in Indang, Cavite, Philippines',
          description: 'Rio Villa Nuevo Mineral Water Resort is a resort in Indang, Cavite, Philippines. The system created for this company consisted of an online reservation and billing system for the guests, as well as management of reservation, payment, and generation of reports for the administration. This system was created in order to help the company ease from their manual management to a more systemated way of handling resort data. In addition to the reservation and billing modules, the system also allows the company to manage the information being displayed in the website.',
          role: 'UI Designer / Frontend developer / Project leader',
          category: 'Web Development',
          languages: 'PHP, CSS, HTML, JavaScript, MySQL',
          tools: 'Sublime Text, XAMPP',
          github: 'https://gitlab.com/IrisLipata/riovillanuevo',
          link: null,
          note: 'Website link unavailable due to expiry of domain.'
        },
      ]
    }),
    methods: {
      openDialog(item) {
        this.dialogItem = item;
        this.showDialog = true;
      },
      closeDialog() {
        this.showDialog = false;
      }
    },
    components: {
      WorkModal,
    },
  }
</script>