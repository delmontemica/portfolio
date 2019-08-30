<template>
  <div id="about" class="strip-bg">
    <v-container>
      <v-layout 
        wrap
        justify-center>
        <v-flex 
          xs12
          sm12
          md5
          lg5
          xl4
          text-center
          data-aos="zoom-in"
        >
          <v-img src="../assets/mica2.png" />
        </v-flex>
        <v-flex 
          xs12
          sm12
          md4
          lg4
          pa-4>
          <div class="text-center"
            data-aos="zoom-in">
            <span class="strip-bigtext">MICAELA DELMONTE</span>
            <br />
            <span class="strip-subtitle">UI・Graphic Designer | Frontend Developer</span>
          </div>
          <div class="pt-5 mt-5 pb-5"
            data-aos="zoom-in-left">
            <p class="body-1 mt-4">
              Hello there!
              <br /><br />
              I am a UI Designer, Frontend Developer, and Graphic Designer. As an individual with an eye for aesthetics, I aim to create and provide designs that are visually pleasing and informative at the same time. I am always eager to learn new things from the experiences I accumulate through working with different people and different projects. With my current skills, I will work hard to provide good services while exerting efforts and enjoying what I am doing.
            </p>
          </div>
          <div data-aos="zoom-in-left">
            <v-btn class="ma-2" outlined color="black"
              href="https://drive.google.com/file/d/1qkNiC7vtoSsXAv-p6MINbDjUuSsYNiMT/view?usp=sharing"
            >English CV</v-btn>
            <v-btn class="ma-2" outlined color="black" disabled>履歴書</v-btn>
            <v-btn class="ma-2" outlined color="black" disabled>職務経歴書</v-btn>
          </div>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>