document.getElementById('start').addEventListener('click', () => {
    const urls = document.getElementById('urls').value.split('\n');
    const interval = document.getElementById('interval').value * 1000;

    chrome.storage.local.set({ urls, interval }, () => {
        chrome.tabs.create({ url: urls[0] });
        let index = 1;
        const rotation = setInterval(() => {
            if (index >= urls.length) clearInterval(rotation);
            chrome.tabs.create({ url: urls[index++] });
        }, interval);
    });
});