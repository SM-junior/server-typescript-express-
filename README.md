##............create server with typescript, express..............

-create a folder-->open with vs code
-->install express, typescript(as dependency)
-->npm init -y (create server)
-->create src folder and dist folder
-->create app folder under src folder
-->create app.ts & server.ts file under src folder
-->npm tsc --init(create tsconfig.json file)
-->open tsconfig.json file
-->rootDir:"./src/"
-->outDir:"./dist"
-->save tsconfig.ts file

..........some commands..........
-->tsc (means typescript compiler. convert ts file to js file)

-->tsc -w (watch mode. if change anything is ts file it automatically convert into js file)
notun vabe tsc deoa lagbe na.
but ai terminal block hoye jabe. server automatically run hobe na
toknon notun terminal open kore abar server k run korano lagbe

file a kono kicu change korle jate save deoar sathe sathe server automatic run hoye
jay se jonno nodemon user korbo. tar jonno
-->npm i -D nodemon
-->go to package.json file
-->"start:dev":"nodemon ./dist/server.js" --> add this on script object and save
-->npm run start:dev -->server run hobe
