document.getElementById("poemForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch("/generate", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    document.getElementById("resultBox").innerText = data.result;
});
