import { Command, flags } from "@oclif/command";
import { db } from "../db";

export default class Memo extends Command {
  static description = "print value stored in database";

  static flags = {
    help: flags.help({ char: "h" }),
  };
  async run() {
    db.get("resolut").set(0).save();
    if (db.get("resolut").value() === 0)
      this.log("Database has been reset succesfully");
  }
}
