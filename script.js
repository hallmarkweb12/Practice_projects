const text = "Frontend Developer • UI Builder • Problem Solver";
let i = 0;
let el = document.querySelector(".typing");
function type() {
    if (!el) return;
    if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}
type();
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "01062a91-6e61-4609-a950-7f781ee3daa7");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
document.querySelector("form").addEventListener("submit", function(e) {
    const response = grecaptcha.getResponse();

    if (response.length === 0) {
        e.preventDefault();
        alert("Please verify you are not a robot ❌");
    }
});
