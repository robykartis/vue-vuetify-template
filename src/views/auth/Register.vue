<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="success">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <form>
            <v-card-text>
              <v-text-field
                prepend-icon="mdi-account"
                name="username"
                label="Username"
                type="text"
                placeholder="username"
                required
              ></v-text-field>
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
              <v-text-field
                prepend-icon="mdi-lock"
                append-icon="mdi-eye"
                name="c_password"
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success">Register</v-btn>
              <v-btn color="info" :to="{ name: 'login' }">Login</v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
