<template>
  <v-content>
	  <Main />
		<About />
		<Skills />
		<Works />
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
};
</script>
