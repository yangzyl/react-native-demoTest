

import store from '../configureStore';

const urlPrefix = 'https://api.openmindclub.com:7001';

const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DEL: 'DEL',
};

function _request(url, paramsOrBody, method, hasToken, hasFile) {
    const headers = {
        Accept: 'application/json',
    };

    if (hasToken) {
        headers['x-access-token'] = getToken();
    }

    if (!hasFile) {
        headers['Content-Type'] = 'application/json';
    }

    const option = {
        headers,
        method,
    };

    if (method !== METHOD.GET) {
        option.body = paramsOrBody;
    }

    url = urlPrefix + url;

    if (method === METHOD.GET && paramsOrBody) {
        url += `?${qs.stringify(paramsOrBody)}`;
    }

    if (__DEV__) {
        console.info(option);
    }

    return fetch(url, option)
        .then(res => res.json());
}

export function get(url, params) {
    const hasToken = true;
    return _request(url, params, METHOD.GET, hasToken);
}

export function post(url, body) {
    const hasToken = true;
    return _request(url, JSON.stringify(body), METHOD.POST, hasToken);
}

export function put(url, body) {
    const hasToken = true;
    return _request(url, JSON.stringify(body), METHOD.PUT, hasToken);
}

export function del(url, body) {
    const hasToken = true;
    return _request(url, JSON.stringify(body), METHOD.DEL, hasToken);
}

/* 不需要提供 token 的 get 请求 */
export function Get(url, params) {
    const hasToken = false;
    return _request(url, params, METHOD.GET, hasToken);
}

/* 不需要提供 token 的 post 请求 */
export function Post(url, body) {
    const hasToken = false;
    return _request(url, JSON.stringify(body), METHOD.POST, hasToken);
}

function getToken() {
    return store.getState().user.token;
}
