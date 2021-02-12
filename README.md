# Discord Bot Template in Typescript

### How to install:
```
git clone https://github.com/kiviev/discord_bot_template_typescript.git your_name_folder

cd your_name_folder

npm install

```

### How to config

Rename .env.sample file to .env

```
cd discord_bot_template_typescript

mv .env.sample .env
```

In [https://discord.com/developers/applications](https://discord.com/developers/applications) -> Bot section you will find the token for the authorization of your bot.

In .env file add your token to the enviroment constant

```
BOT_TOKEN=xxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxx

```


### How to start in development mode


Exec this command in your proyect folder.


```
npm run start:dev

```


### How to build to production code


Exec this command in your proyect folder.


```
npm run build

```

This command will create a folder in the root of the project called build.

The startup file will be in build/src/index.js


### How to run the production code


Once the production files have been created, the bot can be run with


```
npm run start

```
or 

```
node build/src/index.js

```


