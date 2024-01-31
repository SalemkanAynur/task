<template>
  <div class="blocks flex flex-row gap-8">
    <div class="content flex flex-col gap-2">
      <p>{{ $t("choose_edit") }}</p>
      <h2>{{ $t("list_client") }}</h2>
      <ul class="list flex flex-col gap-2 p-8">
        <li v-for="(server, index) in servers" :key="index" @click="selectServer(server)">
          {{ server.server_name }} ({{ server.server_type }})
        </li>
      </ul>
    </div>
    <div class="content">
      <div v-if="selected">
        <h2>{{ $t("edit_server") }}</h2>
        <form @submit.prevent="submit">
          <div class="form-group mb-4">
            <label for="serverName">{{ $t("name_server") }}</label>
            <VeeField
              id="serverName"
              :value="selected.server_name"
              type="text"
              name="serverName"
              :placeholder="$t('name_server')"
            />
          </div>

          <div class="form-group">
            <label for="serverType">{{ $t("type") }}</label>
            <select id="serverType" v-model="selected.server_type" class="select">
              <option value="vds">VDS</option>
              <option value="dedicated">Dedicated</option>
              <option value="hosting">Hosting</option>
            </select>
          </div>
          <UiButton class="btn-main mt-4" text="Сохранить изменения"></UiButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { VeeField, UiButton } from "@/components/atoms";

  const servers = ref([
    { customer_id: "user1", server_name: "server7", server_type: "vds" },
    { customer_id: "user5", server_name: "server2", server_type: "dedicated" },
    { customer_id: "user3", server_name: "server4", server_type: "hosting" }
  ]);

  const selected = ref(null);

  const selectServer = (server) => {
    console.log("Selected Server:", server);
    selected.value = server;
  };

  const submit = () => {
    const index = servers.value.findIndex((server) => server.customer_id === selected.value.customer_id);
    if (index !== -1) {
      servers.value[index] = { ...selected.value };
    }
  };
</script>

<style lang="scss" scoped>
  @import "./index.style.scss";
</style>
