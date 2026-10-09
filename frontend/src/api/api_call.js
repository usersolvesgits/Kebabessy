export async function get_api() {
    try {
        const request = await fetch("http://localhost:8080/test");
        let result = await request.json();
        alert("Got this result after the request (view console): " + result);
        console.log(result);
    } catch (error) {
        alert("Unable to complete api request!");
        console.log(error)
    }
}