
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
  


  function sendEmail() {
    const name = document.querySelectorAll(".t")[0].value.trim();
    const email = document.querySelectorAll(".t")[1].value.trim();
    const message = document.querySelector(".m").value.trim();
  
    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending.");
      return;
    }
  
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  
