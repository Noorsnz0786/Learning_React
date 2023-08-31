before going to take your project to production 

need theses of things should clear in local and beofre production

BUNDLING
CODE SPLITTING
CHUNKING 
IMAGE OPTIMization
REMOVE THE COMMENTS 
you need to minify the code 
COMPRESS THE CODE 

"NPM doesnt stand for node package manager.
there work is to manages the package"

1. npm init -y (but we will not use this one)
1. npm init (we use this one bcoz it will ask every question what you want to keep your package name author name github and many more things it will ask )

Press ^C at any time to quit.
package name: (namaste-react-start-from-28) Namaste-React
Sorry, name can no longer contain capital letters.
package name: (namaste-react-start-from-28) namaste-react
version: (1.0.0)
description: this is namaste react leanring 
entry point: (index.js)
test command: jest
git repository: https://github.com/Noorsnz0786/Updated-Namaste-React
keywords: reacts , namaste react mern stack noorain
author: Noorain Ansari
license: (ISC)

After that we will se new package.json file in that projects (this file is a configuration of a NPM )
Why we need this file ? - 
Because package.json hold the important information about this project. also iyt contains humand readble metadata.

What most important package for any project is bundler 

what is bundler ?
when we have these normal html css js file are whole code need to bundle together ,
minify together, compress, clean beafore sent to production 

it manage your code properly to shift your code to production


WE will be using  parcel bundler.
npm install -D parcel to install to parcel dependency 

here we are explaining about -D 
there are two types of dependency that we can install 
one dev dependency othe ris normal dependency 

dev dep- its means generally requeired in development phase when we are developing our app 

normal dependency - 
it  is used in production also

this parcel is  a beast 😂😂😂
i got a parcel latest version with some unique sign carret sign and tilda so i am explaining here why is there .

caret sign we use for minor version to automatically upgrade your version like
today my parcel version is 2.8.4
but tomorrow it cames with automatically upgrade minor version 2.8.6

and tilda we use for major version like today is 2.8.4 but tomorrow it will come with 3.0.4

after that command we will see two another file on is node modules and second is package.lock.json

packagelock.json-  keep track of exact version of package , dependency
node_modules- like a database of npm

"parcel as a project has its own dpeendency 
and that dependency can have their own dependency is known as transitive dependency"

Always put node_modules on .gitignore
always put package and package-lock file on github and production but never put node_modules on github or production

note : if anything you can generate again then don't put on production and github.

for running our project using parcel then use this command 
"npx parcel index.html"
npx means executing a package 

after this command you will see two file added one .parcel-cache and second is dist and in terminal you will see 
Server running at http://localhost:1234
✨ Built in 1.37s

#parcel
local server for you
dev build 
HMR - Hot module Replacement
File watching algorithms - is a written in C++ 
caching - faster build 
Images optimization
minification
bundle all the files for us 
compressing the file 
content	 hashing
code splitting
differential bundling - support older browsers
diognostic
Error Handling
HTTPs
Tree shaking -  remove unused code for you like extra random code comments 
different dev and prod bundles


Note : npx parcel index.html - for dev
	npx parcel build index.html - for prod (also it will take time to show)

browser list - is a npm package it needs some configuration to support all the version of broweser
 
"browserslist":[
    "last 3 versions"
  ]

it means it will support all the browser of 3 versions 

 
"browserslist":[
    "last 3 chrome versions"
  ]
it will only work on 3 chrome version.

Note : we can also set to support contry wise Broswer list for more details we can check this link https://github.com/browserslist/browserslist#query-composition

