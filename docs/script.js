const installButton = document.getElementById('install');
const openButton = document.getElementById('open');

window.addEventListener('beforeinstallprompt', async (event) => {
	event.preventDefault();
	installButton.prompt = event;
	installButton.removeAttribute('hidden');
});

installButton.addEventListener('click', async () => {
	if (!installButton.prompt)
		return;
	const result = await installPrompt.prompt();
	console.log('Install prompt was: ' + result.outcome);
	installButton.prompt = null;
	installButton.setAttribute('hidden', '');
});

window.addEventListener('appinstalled', () => {
	installButton.prompt = null;
	installButton.setAttribute('hidden', '');
});
