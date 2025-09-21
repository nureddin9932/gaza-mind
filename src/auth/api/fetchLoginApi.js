async function loginFetchAPI({email, password, remember}) {
    email = email.trim();
    password = password.trim();
        try {
            const res = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ email, password, remember })
            })
            if (res.ok) {
                window.location = "/dashboard"
            } else if (res.status == 401) {
                alert("invalid email or password")
            } else if (500) {
                alert("Forbidden: Invalid Email Format") 
            }
        } catch (error) {
            alert("connection error")
            console.log(error)     
        }
    
}


export default loginFetchAPI