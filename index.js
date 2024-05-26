const greet = async () => {
    console.log("Hi")
    await console.log(new Promise((res, rej) => {
        count = 0;
        if (count == 0) {
            res('Success')
        }
        else {
            rej('rejected')
        }
    }))
    console.log("My name is Guaresh")
}

greet()