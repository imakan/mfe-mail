import Redis = require("ioredis");
import config from "./config";
let redis = new Redis(config);
import { Options } from "./typings/index.d";
class MfeMail {
  private options: Options;
  constructor(options: Options) {
    if (!options || typeof options !== "object") {
      throw new Error("mfe-mail options should be an object!");
    }
    this.options = options;
  }
  public sendMail() {
    let pipeline = redis.pipeline();
    return new Promise((resolve, reject) => {
      pipeline
        .rpush("mail_content", JSON.stringify(this.options))
        .exec(err => {
          if (err) {
            reject(err);
          } else {
            resolve("邮件已入队列，稍后发出");
          }
        });
    });
  }
}
export = MfeMail;
