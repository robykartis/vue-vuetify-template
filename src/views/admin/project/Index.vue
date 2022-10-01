<template>
  <v-card color="success">
    <v-container class="py-4 px-4" fluid>
      <v-row>
        <v-col cols="12">
          <template>
            <v-list-item>
              <v-list-item-content>
                <formAdd />
              </v-list-item-content>
            </v-list-item>
          </template>
          <template>
            <v-list-item>
              <v-list-item-content>
                <tableData />
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import formAdd from "../project/_formProject.vue";
import tableData from "../project/_tableProject.vue";
export default {
  components: {
    formAdd,
    tableData,
  },
};
</script>
