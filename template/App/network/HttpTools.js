/**
 * Created by zack on 2018/3/14.
 */

import {BaseUrl} from './API'

const HttpTools = {
	post: (url, param, success, failure) => {
		const requestUrl = BaseUrl + url

		console.log("requestUrl----",requestUrl)
		fetch(requestUrl, {
			credentials: 'include',
			method: 'POST',
			body: param,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': "Bearer " + (global.token ? global.token : '')
			},
		}).then((response) => { //还要同时添加当前的header到下一个callback即可
				if (response.ok) {
					return response.json()
				} else{
					return Promise.reject(json)
				}
			}
		).then((data) => {
			if (data) {
				success(data)
			}else {
				failure(data)
			}
		})
	},
	get: (url, param, success, failure) => {
		let paramsString = ''
		if (param) {
			paramsString = Object.keys(param)
			.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(param[k]))
			.join('&');
		}

		let requestUrl = ''

		if (paramsString.length) {
			requestUrl = BaseUrl + url + '?' + paramsString
		}else {
			requestUrl = BaseUrl + url
		}

		fetch(requestUrl, {
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': "Bearer " + (global.token ? global.token : '')
			},
		}).then((response) => {
				if (response.ok) {
					return response.json()
				} else if (response.status === 401) {

				}
			}
		).then((data) => {
			if (data) {
				success(data)
			}else {
				failure(data)
			}
		})
	},

}

export default HttpTools