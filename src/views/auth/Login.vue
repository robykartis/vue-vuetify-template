<template>
  <v-app id="inspire">
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      height="900"
    >
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="success">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <form>
              <v-card-text>
                <v-text-field
                  prepend-icon="mdi-email"
                  name="username"
                  label="Username"
                  type="text"
                  placeholder="username"
                  required
                ></v-text-field>

                <v-text-field
                  prepend-icon="mdi-lock"
                  append-icon="mdi-eye"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                  required
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-flex class="text-center">
                  <v-btn color="success mb-3" :to="{ name: 'dashboard' }"
                    >Login</v-btn
                  >
                </v-flex>
              </v-card-actions>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-parallax>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
