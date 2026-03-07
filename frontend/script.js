const api_url = "https://dju7th0gg0.execute-api.sa-east-1.amazonaws.com/prod";

async function getVisitorCount() {
    try {
        let response = await fetch(api_url);
        let data = await response.json();
        document.getElementById("counter").innerText = data.count;
    } catch (error) {
        console.error("Error al obtener el contador:", error);
        document.getElementById("counter").innerText = "error";
    }
}

getVisitorCount();