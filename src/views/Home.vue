<template>
  <v-content>
	  <Main />
		<About />
		<Works />
  </v-content>
</template>

<script>
import Main from "../components/Main";
import About from "../components/About";
import Works from "../components/Works";

export default {
	components: {
		Main,
		About,
		Works,
	},
	data: () => ({
    
  }),
};
</script>
