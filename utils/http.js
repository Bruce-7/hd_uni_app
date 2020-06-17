const HD_HTTP_0_SUCCEED = 0

class http {
	static requestAll(url, data, header, method) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: url,
				data: data,
				header: header,
				method: method,
	
				success: (response)=> {
					if (response.data.status == HD_HTTP_0_SUCCEED) {
						resolve(response.data.results)						
					} else {
						let error = {
							'errMsg': '未知错误'
						}
						if (response.data.message) {
							error = {
								'errMsg': response.data.message
							}													
						}
						reject(error)
					}					
				},
				fail: (error)=> {
					error.errMsg = '网络异常'
					reject(error)
				},
				complete: ()=> {}
			})
		})
	}
	
	static getRequest(url, data, header) {
		return this.requestAll(url, data, header, 'GET')
	}
	
	static postRequest(url, data, header) {
		return this.requestAll(url, data, header, 'POST')
	}
	
	static deleteRequest(url, data, header) {
		return this.requestAll(url, data, header, 'DELETE')
	}
	
	static putRequest(url, data, header) {
		return this.requestAll(url, data, header, 'PUT')
	}
	
	static putRequest(url, data, header) {
		return this.requestAll(url, data, header, 'PATCH')
	}
}

export default http