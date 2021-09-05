import { Command, flags } from "@oclif/command";
import { db } from "../db";

export default class Memo extends Command {
  static description = "print value stored in database";

  static flags = {
    help: flags.help({ char: "h" }),
  };
  async run() {
    const dbValue = db.get("resolut").value();
    this.log(dbValue);
  }
}
