/**
 * Calculates the smallest angle between any two hands on an analog clock's face.
 *
 * @param {String} timeOfDay - The time of day, formatted as "hh:mm:ss" (e.g. "08:31:45").
 * @returns {Number|null} - A non-negative value, in degrees, rounded to two decimal places.
 */
function calculateSmallestAngle(timeOfDay)
{
	console.log("Given time: " + timeOfDay);

	// validate given time
	if (!/^(?:1[0-2]|0?[0-9]):[0-5][0-9]:[0-5][0-9]$/.test(timeOfDay))
	{
		console.log("Invalid time format...");
		return null;
	}

	var dateTime = new Date('1970-01-01 ' + timeOfDay);

	// get hour, minute and seconds
	var h = dateTime.getHours();
	var m = dateTime.getMinutes();
	var s = dateTime.getSeconds();
	var minAngle = 0;

	// validate the input
	if (h < 0 || m < 0 || s < 0 || h > 12 || m > 60 || s > 60)
	{
		console.log("Something wrong in input....");
		return null;
	}
	else
	{
		// check the hour, minute and seconds
		if (h == 12) h = 0;
		if (m == 60) m = 0;
		if (s == 60) s = 0;

		// calculate angles
		var hAngle = (30*h)+0.5*(m+s/60.0);
		var mAngle = (6.0*m)+((1/60.0*6.0)*s);
		var sAngle = 6.0 * s;

		// find differences
		var hmAngle = Math.abs((hAngle - mAngle));
		var hsAngle = Math.abs((hAngle - sAngle));
		var msAngle = Math.abs((mAngle - sAngle));

		// fix difference
		hmAngle = (hmAngle > 180) ? Math.abs(hmAngle - 360) : hmAngle;
		hsAngle = (hsAngle > 180) ? Math.abs(hsAngle - 360) : hsAngle;
		msAngle = (msAngle > 180) ? Math.abs(msAngle - 360) : msAngle;

		// find minimum angle
		minAngle = Math.min(hmAngle, hsAngle, msAngle);

		return minAngle;
	}
}

// format the floating number
function zPad(n, l, r)
{
  return(a=String(n).match(/(^-?)(\d*)\.?(\d*)/))?a[1]+(Array(l).join(0)+a[2]).slice(-Math.max(l,a[2].length))+('undefined'!==typeof r?(0<r?'.':'')+(a[3]+Array(r+1).join(0)).slice(0,r):a[3]?'.'+a[3]:''):0
}

var result = calculateSmallestAngle("12:00:55");
if (result !== null)
{
	console.log("Minimum Angle: " +  zPad(result, 2, 2));
}
