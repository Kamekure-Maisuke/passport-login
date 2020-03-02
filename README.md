# passport-login
- passportを利用した認証サンプル

## 起動
- docker未利用

```bash
$ cd passport-login
# .envの中身は各自適当
$ cp .env.sample .env
$ npm ci
```

- docker利用

```bash
# .envの中身は各自適当
$ cp .env.sample .env
$ docker-compose up -d --build
```

- localhost:3000にアクセス
