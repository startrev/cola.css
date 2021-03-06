let 
    fs = require('fs'),
    path = require('path'),
    cleanCSS = require('clean-css'),
    options = { /* options */ },
    filepath = path.resolve('cola', 'cola.css'),
    filedata = fs.readFileSync(filepath, {encoding:'utf8', flag:'r'}),
    output = new cleanCSS(options).minify(filedata)

// console.log(output.styles)

fs.writeFile(path.resolve('cola', 'min', 'cola.min.css'), output.styles, function (err) {
    if (err) throw err
    console.log('Saved!')
})
