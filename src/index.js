const app = require('./app');

app.listen(app.get('port'),() => {
    console.log("el serve ta ready en ", app.get("port") );
});