const shell = require('shelljs');

// 检查控制台是否以运行`git `开头的命令
if (!shell.which('git')) {
  // 在控制台输出内容
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

// 强制递归删除`out目录`
shell.rm('-rf', 'out');

// 将`stuff/`中所有内容拷贝至`dir`目录
shell.cp('-R', 'stuff/', 'dir');

// 进入`dir`目录
shell.cd('dir');

// 返回上一级目录
shell.cd('..');


// 找出所有的扩展名为js的文件，并遍历进行操作
shell.ls('*.js').forEach(function (file) {
  console.log("file>>>", file);

  // 将build_version字段替换为'v0.1.2'
  // shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
});



