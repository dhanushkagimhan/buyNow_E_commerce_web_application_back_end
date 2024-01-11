const MONGO_URL =
    process.env.MONGO_URL ?? "mongodb://127.0.0.1:27017/buy_now_db";

export const config = {
    mongo_url: MONGO_URL,
};
