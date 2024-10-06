const installButton = document.getElementById('install');
const openButton = document.getElementById('open');

window.addEventListener('beforeinstallprompt', async (event) => {
	const relatedApps = await navigator.getInstalledRelatedApps();
	document.body.innerHTML = relatedApps;
	event.preventDefault();
	installButton.prompt = event;
	installButton.removeAttribute('hidden');
});

installButton.addEventListener('click', async () => {
	if (!installButton.prompt)
		return;
	const result = await installPrompt.prompt();
	console.log('Install prompt was: ' + result.outcome);
	disableInAppInstallPrompt();
});

window.addEventListener('appinstalled', () => {
	disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
	installButton.prompt = null;
	installButton.setAttribute('hidden', '');
}

/*const relatedApps = await navigator.getInstalledRelatedApps();

// Search for a specific installed platform-specific app
const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

if (psApp) {
	// Update UI as appropriate
}

window.addEventListener("beforeinstallprompt", async (event) => {
	const relatedApps = await navigator.getInstalledRelatedApps();

	// Search for a specific installed platform-specific app
	const psApp = relatedApps.find((app) => app.id === "com.example.myapp");

	if (psApp) {
		event.preventDefault();
		// Update UI as appropriate
	}
});
*/