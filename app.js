const tipCOGmidpoint = (cogLocation) => {
	return cogLocation / 2;
}

const cogTailMidpoint = (cogLocation, overallLength) => {
	console.log(typeof cogLocation, typeof overallLength)
	return ((overallLength - cogLocation) / 2) + cogLocation;
}

const determineTipCOGmidpoint = () => {
	let cogValue = parseFloat(document.getElementById("cog").value);
	let lengthValue = parseFloat(document.getElementById("length").value);

	console.log(`cogValue: ${cogValue} lengthValue: ${lengthValue}`);

	let tipCOGmidpointLocation = tipCOGmidpoint(cogValue);

	document.getElementById("tip-cog-midpoint").value = tipCOGmidpointLocation;
}

const determineCOGtoTailMidpoint = () => {
	let cogValue = parseFloat(document.getElementById("cog").value);
	let lengthValue = parseFloat(document.getElementById("length").value);

	console.log(`cogValue: ${cogValue} lengthValue: ${lengthValue}`);

	let COGtoTailMidpoint = cogTailMidpoint(cogValue, lengthValue);

	document.getElementById("cog-tail-midpoint").value = COGtoTailMidpoint;
}

const determineMidPoints = () => {
	let rawCOGvalue = 	document.getElementById("cog").value;
	let rawLengthValue = document.getElementById("length").value;
	let rawDiameter = document.getElementById("jav-diameter").value;
	let cogValue;
	let lengthValue;
	let maxDiameter;
	let tipCOGmidpointLocation;
	let COGtoTailMidpoint;

	if (rawCOGvalue === '') {
		return;
	}

	cogValue = parseFloat(rawCOGvalue);
	tipCOGmidpointLocation = tipCOGmidpoint(cogValue);
	document.getElementById("tip-cog-midpoint").value = tipCOGmidpointLocation;

	if (rawLengthValue === '') {
		return;
	}

	lengthValue = parseFloat(rawLengthValue);
	COGtoTailMidpoint = cogTailMidpoint(cogValue, lengthValue);
	document.getElementById("cog-tail-midpoint").value = COGtoTailMidpoint;

	if (rawDiameter === '') {
		return;
	}

	maxDiameter = parseFloat(rawDiameter);
	document.getElementById("90-percent-dia").value = calculateNintyPercentDia(maxDiameter);
}


const clearValues = () => {
	if (document.getElementById("cog").value === '' && document.getElementById("length").value === '') {
		document.getElementById("jav-diameter").value = '';
		document.getElementById("90-percent-dia").value = '';
		return;
	}
	document.getElementById("cog").value = '';
	document.getElementById("length").value = '';
	document.getElementById("tip-cog-midpoint").value = '';
	document.getElementById("cog-tail-midpoint").value = '';
	return false;
}

const calculateNintyPercentDia = (maxDiameter) => {
	return parseInt(maxDiameter) * .9;
}

// document.getElementById("cog").addEventListener("blur", determineMidPoints);
// document.getElementById("length").addEventListener("blur", determineMidPoints);
document.getElementById("clear").addEventListener("click", clearValues);
document.getElementById("calculate").addEventListener("click", determineMidPoints)

