function FLICK(LINK) {
	tede = ["Downloading files",]
	var progress = 0;
	var dialog = app.dialog.progress('Processing...', progress);
	dialog.setText("Checking compatibility with your device");
	var interval = setInterval(function() {
		progress += 1;
		dialog.setProgress(progress);
		if (progress > 20) {
			dialog.setText(tede[0]);
		}
		if (progress > 35) {
			dialog.setText(tede[1]);
		}
		if (progress > 60) {
			dialog.setText(tede[2]);
		}
		if (progress > 80) {
			dialog.setText(tede[3]);
		}	
		if (progress === 100) {
			clearInterval(interval);
			setTimeout(function() {
				window.location.href = LINK;
			}, 5000)
		}
	}, 150)
}