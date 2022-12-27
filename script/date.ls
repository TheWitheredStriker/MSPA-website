clockTick = ->
	const currentTime = new Date()
	const month = currentTime.getMonth() + 1
	const day = currentTime.getDate()
	const year = currentTime.getFullYear()
	const hours = currentTime.getHours()
	const minutes = currentTime.getMinutes()
	const text = (day + "-" + month + "-" + year + ' ' + hours + ':' + minutes)

	document.querySelector('.date').innerHTML = text;

setInterval(clockTick, 1000);