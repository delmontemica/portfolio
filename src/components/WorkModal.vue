<template>
  <v-dialog
    v-model="dialog"
    max-width="80vw"
    max-height="70vh"
  >
    <v-card
      class="pr-10 pl-10 pb-10"
    >
      <v-card-actions>
        <div class="flex-grow-1"></div>

        <div class="float-right">
          <v-btn text icon color="black"
            @click="$emit('close')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-actions>

      <v-layout row>
        <v-flex 
          xs12
          sm12
          md6
          lg6
          xl6 
          pa-5
        >
          <v-img
            :src="item.image"
            width="100%"
          ></v-img>
          <div class="text-center">
            <v-btn text icon color="black"
              :to="item.github"
              :disabled="item.github == null">
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>
            <v-btn text icon color="black"
              :to="item.link"
              :disabled="item.link == null">
              <v-icon>mdi-link-variant</v-icon>
            </v-btn>
            <br />
            <span class="overline">** NOTE: {{item.note}} </span>
          </div>
        </v-flex>
        <v-flex 
          xs12
          sm12
          md6
          lg6
          xl6 
          pa-5
        >
          <div class="text-center">
            <h3>{{item.title}}</h3>
            <span class="overline">{{item.subtitle}}</span>
          </div>
          <v-divider class="mt-2 mb-2" />
          <span class="caption">
            {{item.description}}
          </span>
          <v-divider class="mt-2 mb-2" />
          <span class="caption">
            <strong>ROLE: </strong> {{item.role}} <br />
            <strong>CATEGORY: </strong> {{item.category}} <br />
            <strong>LANGUAGES: </strong> {{item.languages}} <br />
            <strong>TOOLS: </strong> {{item.tools}} <br />
          </span>
        </v-flex>
      </v-layout>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'WorkModal',
  props: {
    modal: Boolean,
    item: Object,
  },
  data: function() {
    return {}
  },
  computed: {
    dialog: {
      get() {
        return this.modal;
      },
      set(val) {
        if (!val) this.$emit('close');
      },
    },
  },
  methods: {},
}
</script>