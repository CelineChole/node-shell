// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');

// });

process.stdout.write('prompt > ');

process.stdin.on('data', () => {
    const cmd = String(process.cwd());

    process.stdout.write(console.log(`${cmd}`));
    process.stdout.write('\nprompt > ');

});
