const day = document.getElementById('day')
const utcTime = document.getElementById('time')
const newDate = new Date()
const date = newDate

const getDay = date.getDay() + 1
// console.log(getDay)


if (getDay === 1){
	
	day.textContent = "Day of the week: Sunday"
	
}else if(getDay === 2){
	
	day.textContent = "Day of the week: Monday"
	
}else if(getDay === 3){
	
	day.textContent = "Day of the week: Tuesday"
	
}else if(getDay === 4){
	
	day.textContent = "Day of the week: Wednesday"
	
}else if(getDay === 5){
	
	day.textContent = "Day of the week: Thursday"
	
}else if(getDay === 6){
	
	day.textContent = "Day of the week: Friday"
	
}else if(getDay === 7){

	day.textContent = "Day of the week: Saturday"
	
}

// console.log(getDay)


// console.log(date)


const currentUTCTime = new Date();

// Get UTC hours, minutes, and seconds
const hours = currentUTCTime.getUTCHours();
const minutes = currentUTCTime.getUTCMinutes();
const seconds = currentUTCTime.getUTCSeconds();

console.log(`${hours}:${minutes}:${seconds}`);


// const childTime = `<p>Current UTC Time: ${hours} : ${minutes} : ${seconds}</p>`

const time = `Current UTC Time: ${hours} : ${minutes} : ${seconds}`

utcTime.textContent = time


