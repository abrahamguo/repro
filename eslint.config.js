export default { rules: { 'no-lonely-if': 'error' } };

if (true)
	if (false) {}
	else { if (false) {} }
else console.log("This doesn't log. But after running --fix, it does log.");