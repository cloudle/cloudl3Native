localDatabase = new loki('cloudl3Storage')

localDatabase.loadDatabase {}, ->
  global.users = localDatabase.getCollection('users')

