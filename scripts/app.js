let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function sendFormInfo() {
  try {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    console.log(`Email: ${email}, Subject: ${subject}, Message: ${message}`);
    document.getElementById("message-confirmation").style.display = "flex";
    setTimeout(() => {
      document.getElementById("message-confirmation").innerHTML =
        '<h2>Thank you for your message</h2><button onclick="closeMessageConfirmation()">Close</button>';
    }, 2000);
  } catch (error) {
    document.getElementById("message-confirmation").style.display = "flex";
    document.getElementById("message-confirmation").innerHTML =
      '<h2>An error occured!</h2><button onclick="closeMessageConfirmation()">Close</button>';
  }
}

/*const openMessageConfirmation = () => {
  messageConfirmation.style.display = "flex";
};*/

const closeMessageConfirmation = () => {
  document.getElementById("message-confirmation").style.display = "none";
  document.getElementById("message-confirmation").innerHTML =
    '<span class="loader"></span>';
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
};

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});

//service-modal code
const services = [
  {
    name: "Frontend development",
    content: "Wooohooo",
    picture: "imgone.jpg",
  },
  {
    name: "Backend development",
    content: "Wooohooo2",
    picture: "imgtwo.jpg",
  },
  {
    name: "UX design",
    content: "Wooohooo3",
    picture: "imgthree.jpg",
  },
  {
    name: "Coaching",
    content: "Wooohooo4",
    picture: "imgfour.jpg",
  },
];

const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      for (let j = 0; j < services.length; j++) {
        if (i === j) {
          document.getElementById(
            "service-modal-content"
          ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/img/${services[j].picture}">`;
        }
      }
    });
  }
};

window.addEventListener("load", openServiceModal);

//Image-slider code

const images = [
  {
    name: "imgone.jpg",
  },
  {
    name: "imgtwo.jpg",
  },
  {
    name: "imgthree.jpg",
  },
  {
    name: "imgfour.jpg",
  },
  {
    name: "imgfive.jpg",
  },
  {
    name: "imgsix.jpg",
  },
];

const setMainImage = (src) => {
  document.getElementById("main-image").setAttribute("src", src);
  setActiveThumbNail();
};

const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
      thumbs[i].style.border = "2px solid red";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

const prevImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbNail();
    }
  }
};

const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbNail();
    }
  }
};

window.addEventListener("load", () => {
  document
    .getElementById("main-image")
    .setAttribute("src", `./media/img/${images[0].name}`);
  document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");

  setActiveThumbNail();
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);
});

//Ligtbox code

const openLightBox = (src) => {
  document.getElementById("lb-thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/img/${img.name}" class="lb-thumbnail" onclick="setMainLbImage(this.src)">`
    )
    .join("");
  document.getElementById("image-lightbox").style.display = "flex";
  setMainLbImage(src);
};

const closeLightBox = () => {
  document.getElementById("image-lightbox").style.display = "none";
};

const setMainLbImage = (tjohoppsan) => {
  console.log(tjohoppsan);
  document.getElementById("lb-main-image").setAttribute("src", tjohoppsan);
  setActiveLbThumbnail();
};

//function that shows the active thumbnail, by comparing the
//thumbnails src attribute to the main image's src attribute and
//if it's the same sets a red border on the tumbnail
const setActiveLbThumbnail = () => {
  const lbThumbs = document.querySelectorAll(".lb-thumbnail");
  console.log("thumbnail elements: ", lbThumbs);
  lbThumbs.forEach((thumbnail) => {
    console.log("thumbnail: ", thumbnail);
    if (thumbnail.src === document.getElementById("lb-main-image").src) {
      thumbnail.style.border = "2px solid red";
    } else {
      thumbnail.style.border = "0px";
    }
  });
};

const prevLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  //let wasZero = false;
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== 0 //&&
      //wasZero === false
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i -= 1)].src);
      setActiveLbThumbnail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === 0
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += thumbsList.length - 1)].src);
      setActiveLbThumbnail();
      //wasZero = true;
    }
  }
};

const nextLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += 1)].src);
      setActiveLbThumbnail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[0].src);
      setActiveLbThumbnail();
    }
  }
};
