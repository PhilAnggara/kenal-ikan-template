AOS.init({
  once: true,
  delay: 50,
  duration: 600
});

const home = document.querySelector(".nav-home");
const about = document.querySelector(".nav-tentang");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 400) {
    home.classList.remove("active");
    about.classList.add("active");
  } else {
    home.classList.add("active");
    about.classList.remove("active");
  }
});


const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".ip-image");
const previewDefaultText = previewContainer.querySelector(".ip-default-text");

previewContainer.addEventListener("click", function() {
  console.log("Di klik");
  inpFile.click();
});

inpFile.addEventListener("change", function() {
  const file = this.files[0];
  console.log(file);
  
  if (file) {
    const reader = new FileReader();

    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";

    reader.addEventListener("load", function() {
      console.log(this);
      previewImage.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    previewDefaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute("src", "");
  }
});