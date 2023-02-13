<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import router from "@/router";

import type OtherForm from "@/Interface/OtherForm";
import HistoryStorage from "@/ts/HistoryStorage";

const form = reactive<OtherForm>({
  hobby: "",
  memo: "",
});

const onNextPage = () => {
  HistoryStorage.Save(form);
  router.push({ name: "page1" });
};

onMounted(() => {
  const data = HistoryStorage.Get();
  form.hobby = data?.hobby ?? "";
  form.memo = data?.memo ?? "";
});
</script>

<template>
  <h1>Page3</h1>
  <div>
    <div class="input-wrapper">
      <label for="hobby">趣味</label>
      <input type="text" id="hobby" v-model="form.hobby" />
    </div>

    <div class="input-wrapper">
      <label for="memo">趣味</label>
      <textarea id="memo" cols="30" rows="10" v-model="form.memo"></textarea>
    </div>

    <button @click="onNextPage">最初へ戻る</button>
  </div>
</template>
