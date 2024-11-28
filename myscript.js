function translate() {
    const text = document.getElementById("diary-input").value;
    document.getElementById("original-text").innerText = `Original: ${text}`;
    // Mock translation
    document.getElementById("translated-text").innerText = `Japanese: (?????)`;
}
