import { findWorkspace, initWorkspace } from "@m4c/core";
import { Command } from "commander";
import { exit } from "node:process";

const program = new Command();

program.name("m4c").description("CLI to module system for C").version("0.1.0");

program
  .command("init")
  .description("Initialize m4c workspace")
  .action(() => {
    const workspace = (() => {
      try {
        return findWorkspace();
      } catch (e) {
        return undefined;
      }
    })();
    if (workspace !== undefined) {
      console.log("Cannot initialize workspace in another workspace");
      exit(1);
    }
    initWorkspace();
  });

program.parse();
