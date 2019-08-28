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
						v-for="(i, index) in links"
            :key="index"
						:to="i.href"
					>
						<span class="home-nav">{{ i.name }}</span>
					</v-btn>
				</div>
				<v-img src='../assets/LOGO.png'
			  	width="300"
			  	style="margin: auto"
			  ></v-img>
				<div class="text-center">
					<v-btn class="ma-1"
						text
						icon
						v-for="(i, index) in networks"
						:key="index"
						:href="i.link"
						>
						<v-icon>{{ i.icon }}</v-icon>
					</v-btn>
				</div>
			</v-flex>
	  </v-layout>
</template>

<script>

export default {
	data: () => ({
		result: '',
    links: [
      { name: 'About', href: '#about'},
			{ name: 'Skills', href: '#skills'},
			{ name: 'Works', href: '#works'},
		],
		networks: [
			{ name: 'Facebook', icon: 'mdi-facebook', link: 'https://www.facebook.com/eladelmonte' },
			{ name: 'Instagram', icon: 'mdi-instagram', link: 'https://instagram.com/maaycah' },
			{ name: 'Github', icon: 'mdi-github-circle', link: 'https://github.com/delmontemica' },
			{ name: 'Behance', icon: 'mdi-behance', link: 'https://www.behance.net/micaela2' },
			{ name: 'LinkedIn', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/delmontemica/' },
			{ name: 'E-Mail', icon: 'mdi-email', link: 'eladelmonte@gmail.com' },
		],
	}),
};
</script>
