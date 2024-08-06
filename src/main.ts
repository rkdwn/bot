/**
 * PRE-requisite function.
 *
 * check env files and set module import method.
 */
import dotenv from "dotenv";
const envFound = dotenv.config();

if (process.env.NODE_ENV === "development" && envFound.error) {
  throw new Error(" Could't find .env file... ");
}

import moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);

/**
 * Main Loop here.
 */
import "reflect-metadata"; // We need this in order to use @Decorators
import TelegramBot from "node-telegram-bot-api";
import { config } from "@/configs";
import Logger from "./logger";
import injectModule from "./module";

async function MainLoop() {
  Logger.info("Starting bot...");
  if (!config.telegramToken) {
    Logger.error(`Telegram token not found in .env file`);
    throw new Error("Telegram token not found in .env file");
  }
  const bot: TelegramBot = new TelegramBot(config.telegramToken, {
    polling: true
  });

  await injectModule({ bot });

  Logger.info("INjected modules.");
}

MainLoop();
