export default { rules: { 'no-lonely-if': 'error' } };

if (true)
	if (false) console.log(5);
	else {
		if (false) console.log(8);
	}
else console.log(11);
