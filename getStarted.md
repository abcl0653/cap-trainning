# Get Started CAP

## Development enviroment 
-   Install VScode
-   Install postman
-   Install node.js and npm
-   Install @sap/cds-dk
-   Install git
-   Register a github account
-   Create a repo

## RESTful API and ODATA
Representatinal State Transfer

https://service.com/Production/1
But it is not necessary pretty URL

HTTP Verbs: PATCH/PUT/GET/POST

odata.org

-   Metadata; get; filter; $top and $skip
-   Create and update (ETag)

## Hello World

```bash
cds init helloworld

# Check the project structure
# pacakge.json; .gitignore

cd helloworld
git init
git add .
git commit -m "First commit"
git remote add origin https://github.com/user/repo.git
git push -u origin master

# Install CDS
npm install

# Check the node_modules
```

srv/sayHello.cds
srv/sayHello.js
```
npx cds run
```

http://127.0.0.1:4005/say-hello/hello(to='World')

## Add a catalog service
cat-services.cds
cat-services.js

## CRUD program

Change package.json add db section
```bash
cds deploy
```

```bash
npm i sqlite3 -D
# -D means development dependency

sqlite3 db/hello.db

.tables
```

Add sqlite3 extension
ctrl+shift+P to openup a .db file

REST Client extension
*.http send request

