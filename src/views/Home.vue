<template>
  <v-container style="height: 60%">
  	<Navigation />
	  <v-layout 
	  	align-center 
	  	justify-center 
	  	row 
	  	fill-height
	  >
			<v-flex>
				<v-img src='../assets/LOGO.png'
			  	width="300"
			  	style="margin: auto"
			  ></v-img>
			</v-flex>
	  </v-layout>
  </v-container>
</template>

<script>
import Navigation from '../components/layout/Navigation';

export default {
	components: {
		Navigation
	},
};
</script>
