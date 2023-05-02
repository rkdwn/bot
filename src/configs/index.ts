const config = {
  telegramToken: process.env.TELEGRAM_TOKEN,
  isProd: Boolean(process.env.NODE_ENV !== "development"),
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  }
};

export { config };
