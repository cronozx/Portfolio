document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("https://avatar-cyan.vercel.app/api/pfp/474642621382393877/image")
    const blob = await res.blob()

    document.getElementById('pfp').src = URL.createObjectURL(blob)
})
