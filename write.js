const shell = require('shelljs');

//  将a的x对象遍历代替b文件
const styleFile = 'dir/write.txt'   //相对路径
    
const file = shell.find(styleFile);

// code为1表示不存在此文件或者文件夹
if (file.code === 1) {
  // 先判断write.txt文件存不存在，不存在则创建 创建文件touch
  shell.touch(styleFile)
}

var str = '';    //进行对象遍历
var obj = {
  a:'1111111',
  b:'2222222',
  c:'3333333'
};
for(var i in obj) {
  str += `${i} = ${obj[i]}\n`;
}

// 文件写入的三种方式
// shell.ShellString(str).to(styleFile);
// shell.echo(str).to(styleFile);  // 当然也可以使用echo，但是echo会打印

/* sed流编辑器，-i表示直接作用源文件 */
shell.sed('-i', /(.*)/, str, styleFile );  // 也可以使用sed进行替换
