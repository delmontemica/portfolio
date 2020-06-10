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
            <span class="strip-bigtext">{{ $t('about.name') }}</span>
            <br />
            <span class="strip-subtitle">{{ $t('about.title') }}</span>
          </div>
          <div class="pt-5 mt-5 pb-5"
            data-aos="zoom-in-left">
            <p class="body-1 mt-4">
              {{ $t('about.greeting') }}
              <br /><br />
              {{ $t('about.content') }}
            </p>
          </div>
          <div data-aos="zoom-in-left">
            <v-btn class="ma-2" outlined color="black"
              href="https://drive.google.com/file/d/1qkNiC7vtoSsXAv-p6MINbDjUuSsYNiMT/view?usp=sharing"
            >English CV</v-btn>
            <v-btn class="ma-2" outlined color="black" href="https://drive.google.com/open?id=1S0lzJTSo5um5Kst4Izn4Td2Ja20pyyne">履歴書</v-btn>
            <v-btn class="ma-2" outlined color="black" href="https://drive.google.com/open?id=1dr0R5rWcpQOWnGwIDmXYmrOX22HclV5g">職務経歴書</v-btn>
          </div>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>