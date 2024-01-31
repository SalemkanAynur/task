<template>
  <div class="blocks flex flex-row gap-8">
    <div class="list flex flex-col gap-2">
      <p>{{ $t("choose_edit") }}</p>
      <h2>{{ $t("list_client") }}</h2>
      <ul class="list flex flex-col gap-2 p-8">
        <li v-for="(list, index) in lists" :key="index" @click="selectServer(list)">
          {{ list.server_name }} ({{ list.server_type }})
        </li>
      </ul>
    </div>
    <div class="list">
      <div v-if="selected">
        <p>{{ $t("edit_server") }}</p>
        <form @submit.prevent="submit">
          <div class="form-group mb-4">
            <label for="serverName">{{ $t("name_server") }}</label>
            <VeeField
              id="serverName"
              v-model="selected.server_name"
              type="text"
              name="serverName"
              :placeholder="$t('name_server')"
              @input="handleInput"
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
          <UiButton class="btn-main mt-4" :text="$t('save')"></UiButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { VeeField, UiButton } from "@/components/atoms";

  const lists = ref([
    { customer_id: "user1", server_name: "server7", server_type: "vds" },
    { customer_id: "user5", server_name: "server2", server_type: "dedicated" },
    { customer_id: "user3", server_name: "server4", server_type: "hosting" }
  ]);

  const selected = ref(null);
  const isSaved = ref(false);

  const selectServer = (list) => {
    console.log("Selected Server Object:", list);
    selected.value = { ...list };
    isSaved.value = false;
  };

  const submit = () => {
    const index = lists.value.findIndex((list) => list.customer_id === selected.value.customer_id);
    if (index !== -1) {
      lists.value[index] = { ...selected.value };
      isSaved.value = true;
    }
  };

  const handleInput = (event) => {
    selected.value.server_name = event.target.value;
  };
</script>

<style lang="scss" scoped>
  @import "./index.style.scss";
</style>
