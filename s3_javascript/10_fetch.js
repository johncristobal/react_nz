const url = "https://jsonplaceholder.typicode.com/users";

const fn = async () => {
    const data = await fetch(url,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token...'
        },
        body: JSON.stringify({
            name: "John",
            website: "google.com"
        })
    });

    const res = await data.json();
    console.log(res);
}

fn();