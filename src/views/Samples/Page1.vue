<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import router from "@/router";

import type NameForm from "@/Interface/NameForm";
import HistoryStorage from "@/ts/HistoryStorage";

const form = reactive<NameForm>({
  firstName: "",
  lastName: "",
  nickName: "",
});

const onNextPage = () => {
  HistoryStorage.Save(form);
  router.push({ name: "page2" });
};

onMounted(() => {
  const data = HistoryStorage.Get();
  form.firstName = data?.firstName ?? "";
  form.lastName = data?.lastName ?? "";
  form.nickName = data?.nickName ?? "";
});
</script>

<template>
  <div>
    <h1>ステップ１</h1>

    <div class="input-wrapper">
      <label for="last-name">苗字</label>
      <input type="text" id="last-name" v-model="form.lastName" />
    </div>

    <div class="input-wrapper">
      <label for="first-name">名前 </label>
      <input type="text" id="first-name" v-model="form.firstName" />
    </div>

    <div class="input-wrapper">
      <label for="nick-name">ニックネーム </label>
      <input type="text" id="nick-name" v-model="form.nickName" />
    </div>

    <button @click="onNextPage">次へ</button>
  </div>
</template>
