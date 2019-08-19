<template>
  <v-container style="height: 100vh;">
    <v-layout 
      align-center 
	  	justify-center 
	  	row 
	  	fill-height
    >
      <v-flex
        xs12
        sm12
        md4
        lg4
      >
        <div style="border-left: 10px solid #000; padding-left: 20px;">
          <span class="display-1 font-weight-light">MICAELA DELMONTE</span>
          <br />
          <span class="subtitle-2 font-weight-thin">UI DESIGNER / FRONTEND DEVELOPER</span>
        </div>
        <v-img src='../assets/mica2.png'
			  	height="60vh"
			  	style="margin: auto"
			  ></v-img>
      </v-flex>
      <v-flex
        xs12
        sm12
        md8
        lg8
      >
        <v-layout row wrap>
          <v-flex
            xs12
            sm12
            md12
            lg12
            pa-8
          >
            <h1 class="title font-weight-light">ABOUT ME</h1>
            <v-card
              flat
              class="pa-4"
              color="transparent">
              <v-layout row wrap>
                <v-flex xs2 text-center>
                  <v-icon x-large>
                    mdi-format-quote-open
                  </v-icon>
                </v-flex>
                <v-flex xs10
                  style="line-height: 10px;">
                  <span class="body-1">As an individual with an eye for aesthetics, I aim to create and provide designs that are visually pleasing and informative at the same time. I am always eager to learn new things through the experiences I accumulate through working with different people and different projects. With my current skills, I will work hard to provide good services while exerting efforts and enjoying what I am doing.</span>
                </v-flex>
                <v-flex xs12 text-center mt-2>
                  <v-btn class="ma-2" outlined href="https://drive.google.com/file/d/1I8Es7gl6qY_BK6Hfi9IWU3JAvD14UKGs/view?usp=sharing">View CV (English)</v-btn>
                  <v-btn class="ma-2" outlined>履歴書</v-btn>
                  <v-btn class="ma-2" outlined>職務経歴書</v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 pl-8>
            <h1 class="title font-weight-light">SKILLS & CAPABILITIES</h1>
            <v-expansion-panels popout>
              <v-expansion-panel
                v-for="(i, index) in skills"
                :key="index"
              >
                <v-expansion-panel-header>{{i.name}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div
                  v-for="(i, index) in i.content"
                  :key="index"
                  class="pa-1">
                    <v-progress-linear
                      color="grey"
                      height="25"
                      :value="i.value"
                      reactive
                    >
                      <span class="overline">{{ i.title }} {{ i.caption }}</span>
                    </v-progress-linear>
                  </div>
                  {{ i.text }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-flex>
        </v-layout>
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
          text: '',
          content: [
            {
              title: 'InVision',
              caption: ':　Wireframing and Prototyping',
              value: 60
            },
          ]
        },
        {
          name: 'Frontend Development',
          text: '',
          content: [
            {
              title: 'JS Frameworks',
              caption: ':　VueJS',
              value: 60
            },
            {
              title: 'PHP',
              caption: ':　Laravel, Ruby on Rails',
              value: 55
            },
            {
              title: 'HTML, CSS, JS',
              caption: '',
              value: 70
            },
          ]
        },
        {
          name: 'Graphic Design',
          text: '',
          content: [
            {
              title: 'Adobe Photoshop',
              caption: '',
              value: 80
            },
            {
              title: 'Adobe Illustrator',
              caption: '',
              value: 50
            },
            {
              title: 'Adobe Lightroom',
              caption: '',
              value: 50
            },
          ]
        },
        {
          name: 'Language Profficiency',
          text: '',
          content: [
            {
              title: 'Filipino',
              caption: ':　Native Fluency',
              value: 100
            },
            {
              title: 'English',
              caption: ':　Bilingual Profficiency',
              value: 85
            },
            {
              title: 'Japanese',
              caption: ':　Conversational',
              value: 50
            },
          ]
        },
      ]
    }),
  }
</script>