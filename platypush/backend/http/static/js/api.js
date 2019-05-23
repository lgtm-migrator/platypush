function execute(request) {
    var additionalPayload = {};

    if (!('target' in request) || !request['target']) {
        request['target'] = 'localhost';
    }

    if (!('type' in request) || !request['type']) {
        request['type'] = 'request';
    }

    if (window.config.token) {
        additionalPayload.headers = {
            'X-Token': window.config.token
        };
    }

    return new Promise((resolve, reject) => {
        axios.post('/execute', request, additionalPayload)
            .then((response) => {
                response = response.data.response;
                if (!response.errors.length) {
                    resolve(response.output);
                } else {
                    // TODO Handle error
                    reject(response.errors[0]);
                }
            })
            .catch((error) => {
                // TODO Handle error
                reject(error);
            });
    });
}

function request(action, args={}) {
    return execute({
        type: 'request',
        action: action,
        args: args,
    });
}

