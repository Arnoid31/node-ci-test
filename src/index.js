'use strict';

const {
    app,
} = require('./app');

const port = 3000;

app.listen(port, (error) => {
    if (error) {
        console.log(`An error occured when starting server : ${error.message}`); // eslint-disable-line no-console

        process.exit(1); // eslint-disable-line no-process-exit
    }

    console.log(`Server is listening on port ${port}`); // eslint-disable-line no-console
});
