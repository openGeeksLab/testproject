/**
 * @providesModule PLApi
 * @flow
 */
import { BASE_URL, DEFAULT_BODY } from '../constants/config';

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

const api = {
    _request: (method: Method, endpoint: string, data: ?object): Promise<any> => {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    ...DEFAULT_BODY,
                })
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    },
    post: (url: string, data: object): Promise<any> => {
        return api._request('POST', url, data);
    },
};

export default api;
