<template>
	  <v-layout 
	  	align-center 
	  	justify-center 
	  	row 
	  	fill-height
			style="height: 100vh; width: 100%"
	  >
			<v-flex xs12>
				<div class="text-center">
					<v-btn
						depressed
						color="transparent"
						class="pa-2 ma-3"
						v-for="(i, index) in $t('menu')"
            :key="index"
						:to="i.link"
					>
						<span class="home-nav font-weight-regular">{{ i.title }}</span>
					</v-btn>
					<v-btn
						depressed
						color="transparent"
						class="pa-2 ma-3"
						v-for="(i, index) in lang"
						:key="index"
						:href="i.link"
					>
					<span class="home-nav">{{ i.lang }}</span>
				</v-btn>
				</div>
				<v-img src='../assets/LOGO.png'
			  	width="300"
			  	style="margin: auto"
					data-aos="fade-left"
			  ></v-img>
				<div class="text-center">
					<v-btn class="ma-1"
						text
						icon
						v-for="(i, index) in networks"
						:key="index"
						:href="i.link"
						data-aos="fade-right"
						>
						<v-icon>{{ i.icon }}</v-icon>
					</v-btn>
				</div>
			</v-flex>
	  </v-layout>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
	data: () => ({
		result: '',
		networks: [
			{ name: 'Facebook', icon: 'mdi-facebook', link: 'https://www.facebook.com/eladelmonte' },
			{ name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com/maaycah' },
			{ name: 'Github', icon: 'mdi-github-circle', link: 'https://github.com/delmontemica' },
			{ name: 'Behance', icon: 'mdi-behance', link: 'https://www.behance.net/micaela2' },
			{ name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/delmontemica/' },
			{ name: 'E-Mail', icon: 'mdi-email', link: 'mailto:eladelmonte@gmail.com' },
		],
		lang: [
			{ lang: 'EN', link: '/' },
			{ lang: 'JP', link: '/ja' },
		]
	}),
	computed: {
		target () {
      const value = this[this.type]
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    },
	}
};
</script>
