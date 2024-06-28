NTUST PRlab Official website
==
## Link
https://lab.prlab.io/
![image](https://github.com/nishikino25/prlab-ntust-frontend/assets/42590869/9f0cd28e-6039-46b9-873f-b7cb17c9d431)

## Environment

* Vue 2.6+ 
```
# If not install vue
$ npm install vue@^2
$ npm install -g @vue/cli
```

## Get Started

### Install Module

```
$ npm i
```
If any errors occur :
1. Open PowerShell (run as Administrator). 
2. Run `npm install -g windows-build-tools`.

### Run Server
Run development mode : http://localhost:4700
```
$ npm run serve
```

## Deploy
Deploy hosting on Firebase, need to login and install Firebase CLI on local.

###  [Setup Firebase](https://firebase.google.com/docs/cli)
```
$ npm install -g firebase-tools

$ firebase login
```

### [Deploy Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)
Hosing domain：http://twisc.prlab.io/

```
$ npm run deploy
```
