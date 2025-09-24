
document.querySelectorAll(".htext").forEach(item => {
    item.addEventListener("click", () => {
      const sectionName = item.textContent.replace(/\s+/g, '').toLowerCase();
  
      let section;
      if (sectionName === "about")
         section = document.querySelector(".about");
      if (sectionName === "projects")
         section = document.querySelector(".Projects");
      if (sectionName === "skills")
         section = document.querySelector(".skill");
      if (sectionName === "contactme")
         section = document.querySelector(".contact");
  
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  
  document.querySelector(".b1").addEventListener("click", () => {
    document.querySelector(".Projects").scrollIntoView({ behavior: "smooth" });
  });
  
  
  
  document.querySelector(".btn1").addEventListener("click", (e) => {
    const name = document.querySelectorAll(".t")[0].value.trim();
    const email = document.querySelectorAll(".t")[1].value.trim();
    const message = document.querySelector(".m").value.trim();
  
    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }
  
  
    alert("✅ Message sent successfully! (You can connect this to email backend later)");
  });
  
  
  document.querySelectorAll(".btn1")[1].addEventListener("click", () => {
    const email = "your.email@example.com"; 
    navigator.clipboard.writeText(email).then(() => {
      alert("📋 Email copied to clipboard!");
    });
  });