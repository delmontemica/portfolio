<template>
  <v-container 
    id="skills"
    style="min-height: 100vh;"
  >
    <div class="mt-5" style="text-align: center">
      <span class="skills-title">Skills</span>
    </div>
    <v-layout 
      row
      class="pa-10"
    >
      <v-flex 
        xs12
        sm4
        md4
        lg4
        mt-3
        pa-5
        text-center
        v-for="(i, index) in skills"
        :key="index">
        <v-progress-circular
          :value="i.rate"
          width="10"
          size="100"
          color="blue-grey"
        >{{i.rate}}</v-progress-circular>
        <div class="pa-2">
          <span class="skills-name">
            {{i.name}}
          </span>
        </div>
        <div style="line-height: 12px">
          <span class="skills-description">
            {{i.description}}
          </span>
        </div>
      </v-flex>
    </v-layout>
    <div class="mt-5" style="text-align: center">
      <span class="skills-title">Tools</span>
    </div>
    <v-layout row
      justify-center>
      <v-flex
        xs4
        sm4
        md2
        lg2
        mt-3
        pa-5
        text-center
        v-for="(i, index) in tools"
        :key="index">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <i :class="i.icon" v-on="on" style="font-size: 80px"></i>
            </template>
            <span>{{i.description}}</span>
          </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'UI Design',
          rate: 60,
          description: 'Knowledge and experience in designing user interfaces using wireframing and prototyping tools/softwares.',
          color: ''
        },
        {
          name: 'Frontend Development',
          rate: 60,
          description: 'Knowledge and experience in frontend development using various frameworks, but mainly PHP and JavaScript frameworks.',
          color: ''
        },
        {
          name: 'Graphic Design',
          rate: 75,
          description: 'Knowledge and experience in designing posters, logos, pamphlets, etc. using various editing software of Adobe.',
          color: ''
        },
      ],
      tools: [
        {
          icon: 'fab fa-php',
          description: 'PHP',
        },
        {
          icon: 'fab fa-laravel',
          description: 'Laravel',
        },
        {
          icon: 'fab fa-js-square',
          description: 'JavaScript',
        },
        {
          icon: 'fab fa-vuejs',
          description: 'VueJS',
        },
        {
          icon: 'fab fa-css3-alt',
          description: 'CSS',
        },
        {
          icon: 'fab fa-sass',
          description: 'SCSS/SASS',
        },
        {
          icon: 'fab fa-html5',
          description: 'HTML',
        },
        {
          icon: 'fab fa-github',
          description: 'GitHub',
        },
        {
          icon: 'fab fa-gitkraken',
          description: 'GitKraken',
        },
        {
          icon: 'fab fa-adobe',
          description: 'Photoshop, Illustrator, Lightroom, Premiere Pro',
        },
        {
          icon: 'fab fa-invision',
          description: 'InVision',
        },
      ],
    }),
  }
</script>