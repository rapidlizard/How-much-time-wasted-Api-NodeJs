export interface FooStats {}

export class User {
  public fooStats: FooStats;

  constructor(fooStats: FooStats) {
    this.fooStats = fooStats;
  }
}
