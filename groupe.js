(function () {
  var ID_CHAMP = 'text-00000360'; // à vérifier après recréation du champ

  function tirer() {
    var champ = document.getElementById(ID_CHAMP);
    if (!champ) return false;
    champ.value = Math.random() < 0.5 ? 'A' : 'B';
    champ.dispatchEvent(new Event('input', { bubbles: true }));
    champ.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }

  if (!tirer()) {
    var essais = 0;
    var t = setInterval(function () {
      if (tirer() || ++essais > 50) clearInterval(t);
    }, 100);
  }
})();
