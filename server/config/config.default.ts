import configLocal from './config.local';
import configProd from './config.prod';
import configUnittest from './config.unittest';

// 默认配置 - 会自动合并运行环境配置。
export default () =>
  Object.assign(
    // 默认配置
    {
      // 项目启动端口
      port: 3000,
      // 数据库配置
      mysql: {
        host: "mysql.sqlpub.com",
        port: 3306,
        username: "ioncehuang",
        password: "N84Z2cVGjXsC9ktZ",
        database: "chanyuecms",
        synchronize: false,
      },
    },
    {
      local: configLocal,
      pord: configProd,
      unittest: configUnittest,
    }[process.env.FM_SERVER_ENV](),
  );
