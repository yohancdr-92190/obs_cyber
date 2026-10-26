(function () {
  var ID_CHAMP = 'controlXXXXXXX'; // id du champ "groupe", à adapter

  function tirer() {
    var champ = document.getElementById(ID_CHAMP);
    if (!champ) return false;
    if (!champ.value) {
      champ.value = Math.random() < 0.5 ? 'A' : 'B';
      champ.dispatchEvent(new Event('change', { bubbles: true }));
    }
    return true;
  }

  // Le formulaire peut s'afficher après le chargement du script : nouvel essai pendant 5 s
  if (!tirer()) {
    var essais = 0;
    var t = setInterval(function () {
      if (tirer() || ++essais > 50) clearInterval(t);
    }, 100);
  }
})();
