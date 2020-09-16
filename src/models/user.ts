export class User {
  public img: string;
  public name: string;
  public created: number;
  public url: string;

  constructor(img: string, name: string, created: number, url: string) {
    this.img = img;
    this.name = name;
    this.created = created;
    this.url = url;
  }
}
