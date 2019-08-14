<template>
  <v-navigation-drawer 
    left
    permanent
    width="280"
    app
    floating
    persistent
    class="pa-4"
  >
    <v-list-item>
      <v-list-item-content
       style="margin-top: 10vh;">
        <v-avatar size="100">
          <img src="../../assets/mica.jpg">
        </v-avatar>
        <v-list-item-title class="sidebar-title">
          MICAELA DELMONTE
        </v-list-item-title>
        <v-list-item-subtitle class="sidebar-subtitle">
          SELF PROCLAIMED GRAPHIC DESIGNER
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in links"
        :key="item.title"
        :to="item.href"
      >
        <v-list-item-content>
          <v-list-item-title class="sidebar-links">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <template v-slot:append>
      <div class="pa-2 text-center">
        <v-btn 
          x-large
          icon
          text
          to="/"
        >
          <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { title: 'About Me', href: '/' },
        { title: 'Skills', href: '/' },
        { title: 'Education', href: '/' },
        { title: 'Experience', href: '/' },
      ]
    }),
  }
</script>