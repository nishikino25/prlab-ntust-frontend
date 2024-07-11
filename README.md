NTUST PRlab Official website
==
## Link
https://lab.prlab.io/
![215ee017-c57b-4e7e-bced-a10347377d48](https://github.com/user-attachments/assets/24d3a2b1-31be-409f-8788-7948cd4e4d26)
![2a57ce44-2271-4d8c-a77f-446ad48808c8](https://github.com/user-attachments/assets/92955803-c762-47d2-b7a0-31ea37bcd714)
![f61481ab-1085-4d58-9101-22df69649c32](https://github.com/user-attachments/assets/e62032c2-14ed-4019-86d7-ca08ea573ac2)


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
