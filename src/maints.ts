let isDone: boolean = false;

async function a() {
    let d = await getData();
}

function getData() {
    return new Promise((resolve, reject)=>{
        resolve(1);
    });
}

a();
