<template>
  <v-container>
    <v-layout>
      <v-flex pt-10 mt-10>
      	<div class="text-center">
          <v-btn
          	text
            @click="overlay = !overlay"
          >
            <v-icon x-large>mdi-chevron-down</v-icon>
            <small>click here</small>
          </v-btn>

          <v-overlay :value="overlay" opacity="0.8">
            <v-btn
              x-large
              icon
              @click="overlay = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <div
              v-for="(i, index) in links"
              :key="index"
              class="home-nav"
            >
              <a :href="i.href">
                {{ i.name }}
              </a>
            </div>
          </v-overlay>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		data: () => ({
      overlay: false,
      links: [
        { name: 'About', href: '/about'},
        { name: 'Works', href: '/works'},
        { name: 'Contact', href: '/contact'}
      ],
    }),
		methods: {
		},
	}
</script>

<style>

</style>