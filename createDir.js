const shell = require('shelljs');
const minimist = require('minimist');



/*
  weather today === args:{_:['today']}
  weather -h === args:{ h:true }
  weather --location 'china' === args:{location:'china'}
*/
const args = minimist(process.argv.slice(2));//前两个是编译器相关路径信息，可以忽略
// console.log(args)

let cmd = args._[0] || 'code';

// 返回首页目录
shell.cd('C:/Users/james.yang/Desktop/');
// 创建cmd文件夹
shell.mkdir(cmd);
// 进入cmd文件夹
shell.cd(cmd)

// 初始化
shell.exec('npm init -y');
// vscode打开
shell.exec('code .');