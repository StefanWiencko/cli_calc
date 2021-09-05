import { Command, flags } from "@oclif/command";
import { db } from "../db";
const parseToNumber = (input: string) => parseFloat(input);
export default class Add extends Command {
  static description = "add two numbers";

  static flags = {
    help: flags.help({ char: "h" }),
    memory: flags.boolean({
      char: "m",
      description:
        "add first number to value from db, additional arguments will be ignored",
    }),
  };

  static args = [
    { name: "first", parse: parseToNumber },
    { name: "second", required: false, parse: parseToNumber },
  ];

  async run() {
    const { args, flags } = this.parse(Add);
    const flagsValues = Object.values(flags)[0];
    const invalidArguments =
      isNaN(args.first) ||
      (flagsValues === undefined && isNaN(args.second)) ||
      (flagsValues && args.second);
    const areValidArguments =
      args.first && args.second && flagsValues === undefined;
    const isValidMemoryFlagArgument = args.second === undefined && flags.memory;

    if (invalidArguments) this.error(new Error("Invalid input"));
    if (areValidArguments) this.log(JSON.stringify(args.first + args.second));
    if (isValidMemoryFlagArgument) {
      const dbValue = db.get("resolut").value();
      const resolut = dbValue + args.first;
      db.get("resolut").set(resolut);
      db.save();
      this.log(db.get("resolut").value());
    }
  }
}
