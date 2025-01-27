<template>
  <div class="burst-pucker"></div>
</template>


<script>
  export default {
    name: 'StartBurst'
  }
</script>

<style lang="scss" scoped>

.burst-pucker {
  position: relative;
  width: 40px; /* Largeur totale */
  height: 40px; /* Hauteur totale */
  background-color: #d3d3d3; /* Couleur principale de l'étoile */
  clip-path: polygon(
    50% 0%,   /* Pointe supérieure */
    60% 40%,  /* Coin supérieur droit */
    100% 50%, /* Pointe droite */
    60% 60%,  /* Coin inférieur droit */
    50% 100%, /* Pointe inférieure */
    40% 60%,  /* Coin inférieur gauche */
    0% 50%,   /* Pointe gauche */
    40% 40%   /* Coin supérieur gauche */
  );
}
</style>