# discord bot


### installation

#### server
1. `npm i`
2. create a .env with the following content
```
DB_URL=MONGODBSRV
email=GMAILUSERNAME
password=GMAILPASSWORD
```
3. enable less secure apps for your google acount
4. `node index.js`

#### client
1. `npm i`
2. create a .env with the following content
```
token=DISCORDTOKEN
DB_URL=MONGODBSRV
```
3. in botconfig.json replace the value me with the discord bot user id
4. enable all the intents in the discord developer portal

##### why doesnt x work?
q: server : Error: Invalid login: 534-5.7.14
a: you didnt enable [less secure apps](https://myaccount.google.com/lesssecureapps)

q: bot: client no valid intents
a: make shure you enabled all the intents 


### wall of mistakes
1. calling the user database presence 
2. using javascript
3. living
4. breahing
5. ditch javascript return to monke
6. or x86 assambly instruction set