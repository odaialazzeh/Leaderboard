export default class ScoresList {
  async addscore(names, scorevalue) {
    this.a = 'hi';
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/odai/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: names,
        score: scorevalue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((error) => error('Error:', error));
  }
}
