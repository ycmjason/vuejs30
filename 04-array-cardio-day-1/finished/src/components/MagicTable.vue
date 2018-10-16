<template>
  <table v-if="typeof data[0] === 'object'">
    <tr>
      <th v-for="key in Object.keys(data[0])" :key="key">{{ key.toUpperCase() }}</th>
    </tr>
    <tr v-for="(datum, i) in data" :key="i">
      <td v-for="(value, key) in datum" :key="key">{{ value }}</td>
    </tr>
  </table>
  <table v-else>
    <tr v-for="(datum, i) in data" :key="i">
      <th>{{ i }}</th>
      <td>{{ datum }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['data'],
}
</script>
