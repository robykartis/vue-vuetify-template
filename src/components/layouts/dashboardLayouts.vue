<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-flex class="text-center">
        <v-sheet color="grey lighten-4" class="pa-4" align-center>
          <v-avatar class="mb-3" size="68">
            <v-img src="https://www.svgrepo.com/show/105032/avatar.svg"></v-img>
          </v-avatar>
          <div>john@vuetifyjs.com</div>
        </v-sheet>
      </v-flex>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-card elevation="4" class="rounded-lg">
          <v-list-item-group
            elevation="4"
            v-model="items.active"
            no-action
            color="success"
            class="mt-3"
          >
            <v-list-item elevation="4" link to="/dashboard">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-card>

        <v-card elevation="4" class="rounded-lg">
          <v-list-group
            class="mt-3"
            color="success"
            v-model="items.active"
            prepend-icon="mdi-file-cabinet"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Project</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/project">
              <v-list-item-content>
                <v-list-item-title>Dafrar Project</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-card>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn class="mx-2" fab small>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-btn>

      <v-toolbar-title>My - App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-2" fab small to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Roby</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  data: () => ({
    drawer: null,
    items: [
      {
        active: true,
      },
    ],
  }),
};
</script>
