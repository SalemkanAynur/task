<template>
  <div class="input-container">
    <div class="input-container__wrapper">
      <label v-show="isActive || inputValue" class="input-container__wrapper__label">{{ label }}</label>
      <Field
        v-model="inputValue"
        :name="name"
        :label="label"
        :type="type"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="isActive ? '' : placeholder"
        class="input-container__input"
        @focus="isActive = true"
        @blur="isActive = false"
      />
      <img v-if="props.icon" :src="props.icon" alt="image" class="input-container__input_icon" @click="emitIconClick" />
    </div>
    <ErrorMessage class="input-container__error-message mt-1" :name="name" />
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps, defineEmits, watch } from "vue";
  import { Field, ErrorMessage } from "vee-validate";
  import type { MaskType } from "./interfaces";

  const props = defineProps<{
    name: string;
    label?: string;
    type?: string;
    placeholder?: string;
    icon?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    maskType?: MaskType;
    errorMessages?: string;
    maxlength?: number;
  }>();

  const emit = defineEmits(["on-change", "click-icon"]);
  const isActive = ref(false);

  const inputValue = ref(props.defaultValue);

  watch(inputValue, (newValue: string | number | undefined) => {
    if (props.maskType && newValue) {
      inputValue.value = props.maskType.masked(newValue as string);
    }
    emit("on-change", inputValue.value);
  });

  watch(
    () => props.defaultValue,
    (newValue) => {
      inputValue.value = newValue as string;
    }
  );

  const emitIconClick = () => {
    emit("click-icon");
  };
</script>
<style scoped lang="scss">
  @import "./index.style.scss";
</style>
