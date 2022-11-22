export default class ScoresList {
    allscores = [];

    savescore() {
      const sco = JSON.stringify(this.allscores);
      localStorage.setItem('scores', sco);
    }

    addscore(names, scorevalue) {
      const scoreArr = {
        names,
        scorevalue,
      };
      this.allscores.push(scoreArr);
      this.savescore();
    }

    getStoredscore() {
      this.allscores = JSON.parse(
        localStorage.getItem('scores'),
      );
    }
}
