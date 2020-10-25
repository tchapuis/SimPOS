<template>
  <div class="home flex flex-col justify-between">
    <div>
      <h1 class="text-4xl">Bienvenue sur SimPOS</h1>
      <h2 class="mb-4">Planning d'Occupation des Salles de la fabrique de Simplon Grenoble</h2>
      <p class="mb-4">Pour commencer, veuillez vous connecter</p>
      <section class="mb-4">
        <h3 class="text-xl mb-2">Etape 1</h3>
        <p>Ajoutez des salles à gérer.</p>
      </section>
      <section>
        <h3 class="text-xl mb-2">Etape 2</h3>
        <p class="mb-2">Dans le calendrier, glisser et déposer une salle pour l'ajouter au planning.</p>
        <ul>
          <li>Vous pouvez la déplacer pour changer la date.</li>
          <li>Vous pouvez également l'étirer pour changer sa durée.</li>
          <li>Un clic sur un évènement du calendrier permet de le supprimer du planning.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

};
</script>
