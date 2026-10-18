export async function getApi() {
    const URL = "http://localhost:8080/test"

    try {
        const request = await fetch(URL);
        let result = await request.json();
        alert("Got this result after the request (view console): " + result);
        console.log(result);
    } catch (error) {
        alert("Unable to complete api request!" + error);
        console.log(error)
    }
}