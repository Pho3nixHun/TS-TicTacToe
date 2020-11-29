export default (): Promise<Event|void> => {
    return new Promise<Event|void>((resolve) => {
        if (document.readyState === 'complete') {
            document.removeEventListener('load', resolve);
            window.removeEventListener('DOMContentLoaded', resolve);
            resolve();
        }
        document.addEventListener('load', resolve);
        window.addEventListener('DOMContentLoaded', resolve);
    })
}