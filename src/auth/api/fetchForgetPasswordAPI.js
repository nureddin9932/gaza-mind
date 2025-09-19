async function fetchForgetPasswordAPI({ email }) {
    email = email.trim();
        try {
            const res = await fetch("http://localhost:5000/auth/forgot_password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ email })
            })
            if (res.ok) {
                alert("Reset password steps have been sent to your email")
            } else if (res.status == 404) {
                alert("User not found")
            } else if (500) {
                const data = await res.json()
                alert(data.message)
            }
        } catch (error) {
            alert("connection error")
            console.log(error)     
        }
    
}
export default fetchForgetPasswordAPI