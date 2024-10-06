<script setup>
import { useDark, useToggle } from "@vueuse/core"

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="text-6xl font-medium text-primary">Hello world</div>
  <button @click="toggleDark()">
    Toggle theme {{ isDark ? "dark" : "light" }}
  </button>
</template>
