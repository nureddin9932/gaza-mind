const params = new window.URLSearchParams(window.location.search);
const token = params.get('token');

async function fetchResetPassword({ password }) {
    password = password.trim();
        try {
            const res = await fetch(`http://localhost:5000/auth/reset_password?token=${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password })
            })
            if (res.ok) {
                window.location = "/success-message"
            } else if (res.status == 400) {
                const data = res.json()
                alert(data.message)
            } else if (401) {
                const data = await res.json()
                alert("Invalid or expired token")
            } 
        } catch (error) {
            alert("connection error")
            console.log(error)     
        }
    
}
export default fetchResetPassword;