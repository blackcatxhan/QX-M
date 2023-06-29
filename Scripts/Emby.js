if ($response.status != 200) {
	const unlock = {
		cacheExpirationDays: 777,
		resultCode: 'GOOD',
		message: 'Device Valid'
	}
	const status = 200
	const headers = $response.headers
	const body = JSON.stringify(unlock)
	$done({
		status,
		headers,
		body
	})
} else {
	$done({})
}