function askQuestion() {
    var p=prompt('Who is your favorite figure skater?')
    if (p != null) {
        document.getElementById('question').innerHTML = 'Wow! ' + p + ' is very talented!';
    }
}