<template>
  <div>

    <v-toolbar id="toolbar" fixed light color="navbar" class="elevation-2">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text custom-typography">Sistema de Gestao de Estoque [B2B]</v-toolbar-title>
      <v-spacer></v-spacer>

      <div id="logout" @click.prevent="logout">
        <v-row>
          <v-icon class="custom-typography" dark>mdi-logout</v-icon>
          <v-toolbar-title class="white--text custom-typography">Sair</v-toolbar-title>
        </v-row>
      </div>
    </v-toolbar>

    <v-container fluid>
      <v-navigation-drawer v-model="drawer" fixed app clipped class="drawer-style">
        <v-list-item id="avatar-content">
          <v-list-item-avatar>
            <v-img :src="imgUser"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title id="item-title">{{ nameUser }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list dense class="pt-3" id="v_list">
          <v-list-item v-for="(item, index) in menu" :key="index" :to="item.page">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>

  </div>
</template>

<script>

export default {
  name: "Menu",
  data: () => ({
    drawer: true,
    nameUser: String,
    imgUser: 'https://randomuser.me/api/portraits/men/78.jpg',
    menu: [
      { name: "Página Inicial", page: "home", icon: "mdi-desktop-mac-dashboard" },
      { name: "Consultas", page: "consultas", icon: "mdi-account-search" },
    ],
  }),
  methods:{
    logout(){
      this.$store.commit('CLEAR_ALL')
      this.$router.push({ name: 'Login' })
    }
  },
  mounted(){
    this.nameUser = this.$store.state.user.name
  }
};
</script>

<style scoped>
#toolbar {
  z-index: 9999;
}
#v_list{
  color: #004c90;
}
#logout {
  cursor: pointer; 
  padding-right:10px;
  text-decoration: none; 
  color: inherit;
}
#item-title {
  white-space: normal;
  font-size: 0.91em;
  text-align:left;
}
#avatar-content {
  margin-top: 2px;
}
@media only screen and (max-width: 1263px) {
  #avatar-content {
    padding-top: 60px;
  }
}
</style>