const shell = require('shelljs');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));//前两个是编译器相关路径信息，可以忽略
let branch = args._[0] || 'master';
let msg = args._[1] || 'autocommit';


//检查控制台是否可以运行`git `开头的命令
if (!shell.which('git')) {
  //在控制台输出内容
  shell.echo('Sorry, this script requires git');
  // 以退出码为code退出当前进程
  shell.exit(1);
}

shell.exec('git config -l');

shell.exec(`git config --global user.name "yangxinquan0902"`);
shell.exec(`git config --global user.email "1501684012@qq.com"`);

/*
shell.exec('git config --global user.name "yangxinquan"');
shell.exec('git config --global user.email "yangxinquan@orangenat.com"');
*/

shell.exec(`git pull origin ${branch}`);
shell.exec('git add .');
shell.exec(`git commit -m ${msg}`);
shell.exec(`git push origin ${branch}`);