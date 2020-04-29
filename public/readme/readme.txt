step 1 : npm install -g live-server
step 2 : live-server <folder name> for checking whether server is live
Step 3 : installing babel and its presets
         a>   npm install -g babel-cli /yarn global add babel-cli> this will install latest version of babel cli
         b>   now create project
              yarn init
         c>   installing dependencies 
              yarn add babel-preset-react babel-preset-env
         d>   compile source file using command [--watch will automatically refelct any change in source file to destination file]
                babel <source file> --out-file=<outputfile path> --presets=env, react --watch

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

npm uninstall pkg name
yarn remove pkg name

npm install  -g pkg name  (-g) global
yarn global add pkg name



webpack

instal webpack
npm install webpack@4.42.1 webpack-cli 

npm install validator
npm install react
npm install react-dom
npm install @babel/core --save
npm install babel-loader
npm install @babel/preset-react
npm install @babel/preset-env

npm install webpack
npm install webpack-dev-server

npm install --save-dev babel-plugin-transform-class-properties 

npm install react-modal

npm install style-loader css-loader

npm install sass-loader 
npm install node-sass

npm install normalize.css for reseting the css support of all type of browsers
