const timer = () => {
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] < 0){
      break;
    } else if (isNaN(process.argv[i])){break;}
    setTimeout(() => {
      process.stdout.write('\x07')
    }, process.argv[i]);
  }
}
timer(10)





