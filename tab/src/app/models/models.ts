export class Post {
    poster: String;
    text: String;
    img: String;
    date_posted: Date;
    isAd: boolean;

    constructor(p: String, t: String, image: String, dp: Date, i: boolean) {
      this.poster = p;
      this.text = t;
      this.img = image;
      this.date_posted = dp;
      this.isAd = i;
    }
}
