export default (function scoreStorage() {
  const allScores = {
    easy: 0,
    medium: 0,
    hard: 0,
    extreme: 0,
  }

  if (!localStorage.getItem('scores')) localStorage.setItem('scores', JSON.stringify(allScores));

  function getScores() {
    let storedScores = localStorage.getItem('scores');
    if (storedScores) {
      return JSON.parse(storedScores);
    } else {
      return {
        easy: 0,
        medium: 0,
        hard: 0,
        extreme: 0,
      };
    }
  }

  function saveScores(obj) {
    localStorage.setItem('scores', JSON.stringify(obj));
  }

  function clear() {
    localStorage.removeItem('scores');
  }

  return {saveScores, getScores, clear};
})();