// Get a reference to the 'buttonInstall' element in the DOM
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event for later use
    window.deferredPrompt = event;
    // Remove the 'hidden' class to display the install button
    butInstall.classList.remove('hidden');
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // If there is no prompt event, exit the function
    if (!promptEvent) {
        return;
    }
    // Show the install prompt to the user
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.add('hidden');
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
    // Clear the stored prompt event
    window.deferredPrompt = null;
    // Add the 'hidden' class to hide the install button
    butInstall.classList.add('hidden');
});

