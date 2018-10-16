<template>
  <div id="app">
    <h1>Array cardio day 1 💪</h1>
    <Q1 :inventors="inventors" />
    <Q2 :inventors="inventors" />
    <Q3 :inventors="inventors" />
    <Q4 :inventors="inventors" />
    <Q5 :inventors="inventors" />
    <Q6 :people="people" />
    <Q7 :vihicles="vihicles" />
  </div>
</template>

<script>
import Q1 from './components/Q1.vue';
import Q2 from './components/Q2.vue';
import Q3 from './components/Q3.vue';
import Q4 from './components/Q4.vue';
import Q5 from './components/Q5.vue';
import Q6 from './components/Q6.vue';
import Q7 from './components/Q7.vue';

export default {
  name: 'app',
  components: { Q1, Q2, Q3, Q4, Q5, Q6, Q7 },
  data: () => ({
    inventors: [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
    ],
    people: ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'],
    vihicles: ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ],
  }),
}
</script>

<style>
td, th {
  padding: 0.2rem 1rem;
}

tr:nth-child(odd) {
  background: #efefef;
}
</style>
