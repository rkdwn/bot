import TelegramBot from "node-telegram-bot-api";

type InjectModuleProps = {
  bot: TelegramBot;
};

const injectModule = async (params: InjectModuleProps) => {
  //
  const { bot } = params;
  // inport modules.

  // finally

  bot.onText(/test/, msg => {
    bot.sendMessage(msg.chat.id, "test message.");
  });
};

export default injectModule;
