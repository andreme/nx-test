import {sum, sumAndMulti} from '@test/lib1'


setInterval(() => {
	console.log(new Date(), sum(2, 2), sumAndMulti(2, 2))
}, 2000)

