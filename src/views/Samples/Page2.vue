<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import router from "@/router";

import type ProfileForm from "@/Interface/ProfileForm";
import HistoryStorage from "@/ts/HistoryStorage";

const options = [
  "北海道",
  "青森",
  "岩手",
  "宮城",
  "秋田",
  "山形",
  "福島",
  "茨城",
  "栃木",
  "群馬",
  "埼玉",
  "千葉",
  "東京",
  "神奈川",
  "新潟",
  "富山",
  "石川",
  "福井",
  "山梨",
  "長野",
  "岐阜",
  "静岡",
  "愛知",
  "三重",
  "滋賀",
  "京都",
  "大阪",
  "兵庫",
  "奈良",
  "和歌山",
  "鳥取",
  "島根",
  "岡山",
  "広島",
  "山口",
  "徳島",
  "香川",
  "愛媛",
  "高知",
  "福岡",
  "佐賀",
  "長崎",
  "熊本",
  "大分",
  "宮崎",
  "鹿児島",
  "沖縄",
];

const maxDate = ref("");

const form = reactive<ProfileForm>({
  birthday: "",
  prefecture: null,
});

const onNextPage = () => {
  HistoryStorage.Save(form);
  router.push({ name: "page3" });
};

onMounted(() => {
  const date = new Date();

  const month = `0${date.getMonth() + 1}`.slice(-2);
  const defaultDate = `${date.getFullYear()}-${month}-${date.getDate()}`;

  maxDate.value = defaultDate;

  const data = HistoryStorage.Get();
  form.birthday = data?.birthday ?? defaultDate;
  form.prefecture = data?.prefecture ?? null;
});
</script>

<template>
  <h1>Page2</h1>
  <div>
    <div class="input-wrapper">
      <label for="birthday">誕生日</label>
      <input type="date" id="birthday" v-model="form.birthday" :max="maxDate" />
    </div>

    <div class="input-wrapper">
      <label for="prefecture">出身地</label>
      <select id="prefecture" v-model="form.prefecture">
        <option value=""></option>
        <option v-for="(name, index) in options" :key="index" :value="index">
          {{ name }}
        </option>
      </select>
    </div>

    <button @click="onNextPage">次へ</button>
  </div>
</template>
