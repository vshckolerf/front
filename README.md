# AgylamWebFront

## Установка и запуск

Для установки и запуска проекта введите:

```cmd
npm i --legacy-peer-deps
npm run dev
```

### Для запуска внутри docker-контейнера:
Build можно делать только при первом запуске.
```cmd
docker-compose -f .\docker-compose.dev.yml build
docker-compose -f .\docker-compose.dev.yml up
```
---
 ---
##### *Agylam - проект по автоматизации школьных звонков. Он состоит из сайта, с помощью которого можно управлять расписанием и python-скрипта, звенящего сами звонки.
