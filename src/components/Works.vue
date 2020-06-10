<template>
  <v-container id="works" style="min-height: 100vh;">
    <div class="mt-5" style="text-align: center"
      data-aos="zoom-in">
      <span class="skills-title">{{ $t('about.works') }}</span>
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
            v-for="(i, index) in $t('works')"
            :key="index"
            data-aos="zoom-out-right"
          >
            <v-hover
              v-slot:default="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="mx-auto"
                @click="openDialog(i, index)"
              >
                <v-img
                  :src="works[index].image"
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
      :image='works[index].image'
    />
    
  </v-container>
</template>

<script>
import WorkModal from '@/components/WorkModal.vue';
  export default {
    data: () => ({
      showDialog: false,
      dialogItem: {},
      index: 0,
      works: [
        {
          image: require('@/assets/okutara.png')
        },
        {
          image: require('@/assets/babel.png')
        },
        {
          image: require('@/assets/spring.png')
        },
        {
          image: require('@/assets/kodomo.png')
        },
        {
          image: require('@/assets/dnus.png')
        },
        {
          image: require('@/assets/rio.png')
        },
      ]
    }),
    methods: {
      openDialog(item, index) {
        this.dialogItem = item;
        this.showDialog = true;
        this.index = index;
        console.log
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