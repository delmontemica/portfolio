<template>
  <v-content>
	  <Main />
		<About />
		<Skills />
		<Works />
		<v-footer padless>
			<v-col
				class="text-center"
				cols="12"
			>
				<span class="overline">&copy; {{ new Date().getFullYear() }} ― Micaela Delmonte</span>
			</v-col>
		</v-footer>
  </v-content>
</template>

<script>
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Works";

export default {
	components: {
		Main,
		About,
		Skills,
		Works,
	},
	data: () => ({
    
  }),
  beforeMount() {
    this.$i18n.locale = this.$route.params.lang;
  },
};
</script>
