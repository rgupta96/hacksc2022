export class Post {
    poster: String;
    text: String;
    date_posted: Date;

    constructor(p: String, t: String, dp: Date) {
      this.poster = p;
      this.text = t;
      this.date_posted = dp;
    }
}
