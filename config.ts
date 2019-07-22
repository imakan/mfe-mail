export default {
  port: 6379,
  host: '你的redis地址',
  password: 'redis密码',
  family: 4,
  db: 0,
  autoResubscribe: false,
  enableOfflineQueue: true,
  autoResendUnfulfilledCommands: true,
  maxRetriesPerRequest: 20,
  retryStrategy(times: number) {
    let delay = Math.min(times * 50, 2000);
    return delay;
  }
};
