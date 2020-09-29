interface Game {
  appid: number;
  playtime: number;
}

interface Rating {
  title: string;
  description: string;
}

export class User {
  public img: string;
  public name: string;
  public created: number;
  public url: string;
  public games: Array<Game>;
  public totalHours: number;
  public rating: any;

  constructor(img: string, name: string, created: number, url: string) {
    this.img = img;
    this.name = name;
    this.created = created;
    this.url = url;
    this.games = [];
    this.totalHours = 0;
    this.rating = {};
  }

  calcTotalHours() {
    let totalMinutes = 0;

    this.games.forEach((game) => {
      totalMinutes += game.playtime;
    });

    this.totalHours = totalMinutes / 60;
  }
}
