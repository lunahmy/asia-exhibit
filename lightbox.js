const modalData = {
  one: {
    img: "img/icon-tiger.svg",
    map: "img/map_tiger.svg",
    title: "Tiger",
    tag: "Endangered",
    color: "#e06e4f",
    textColor: "#ffffff",
    habitat: "<strong>Habitat:</strong> Temperate, tropical or evergreen forests, mangrove swamps and grasslands.",
    threats: "<strong>Threats:</strong> Commercial poaching, habitat encroachment and loss of prey.",
    text: "<strong>Fun fact:</strong><br>Tigers are the largest of all big cat species native to Asia."
  },
  two: {
    img: "img/icon-gibbon.svg",
    map: "img/map_gibbon.svg",
    title: "White-Cheeked Gibbon",
    tag: "Critically Endangered",
    color: "#BD3144",
    textColor: "#ffffff",
    habitat: "<strong>Habitat:</strong> Evergreen tropical rainforests and monsoon forests.",
    threats: "<strong>Threats:</strong> Poaching, forest encroachment and pet trading.",
    text: "<strong>Fun fact:</strong><br>White-cheeked gibbons are known for their elaborate duets."
  },
  three: {
    img: "img/icon-otter.svg",
    map: "img/map_otter.svg",
    title: "Asian Small-Clawed Otter",
    tag: "Vulnerable",
    color: "#e5c74c",
    textColor: "#333",
    habitat: "<strong>Habitat:</strong> Small streams and rivers, marshes, rice paddies and mangroves.",
    threats: "<strong>Threats:</strong> Extensive poaching and trading.",
    text: "<strong>Fun fact:</strong><br>These otters are the smallest otter species in the world."
  },
  four: {
    img: "img/icon-cobra.svg",
    map: "img/map_cobra.svg",
    title: "King Cobra",
    tag: "Vulnerable",
    color: "#e5c74c",
    textColor: "#333",
    habitat: "<strong>Habitat:</strong> Rivers, rainforests, bamboo thickets, mangrove swamps and grasslands.",
    threats: "<strong>Threats:</strong> Habitat destruction and human activties.",
    text: "<strong>Fun fact:</strong><br>King cobras are the world's longest venomous snakes."
  }
};
document.addEventListener("DOMContentLoaded", () => {
//animal modals/click listener  
document.querySelector(".icons").addEventListener("click", (e) => {
  const icon = e.target.closest(".icon");
  if (!icon) return;
  
  const id = icon.dataset.modal;
  const data = modalData[id]; 
  if(!data) return; 


  const modal = document.querySelector(".animal-modal");
  modal.querySelector(".modal-img").src = data.img; 
  modal.querySelector(".map-img").src = data.map; 
  modal.querySelector(".modal-title").textContent = data.title; 
  modal.querySelector(".modal-tag").textContent = data.tag; 
  modal.querySelector(".modal-tag").style.color = data.textColor; 
  modal.querySelector(".status").style.backgroundColor = data.color; 
  modal.querySelector(".modal-text").innerHTML = data.text; 
  modal.querySelector(".habitat").innerHTML = data.habitat; 
  modal.querySelector(".threats").innerHTML = data.threats; 

  modal.classList.add("active");

  stopScale();

});

//sources modal/button click listener  
document.querySelector(".sourcesBtn").addEventListener("click", (e) => {
  document.querySelector(".sources-modal").classList.add("active");
});

document.querySelector(".infoBtn").addEventListener("click", (e) => {
  document.querySelector(".info-modal").classList.add("active");
});



//close function 
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if(e.target === modal || e.target.classList.contains("close")){
      modal.classList.remove("active");
      }
  });
});

function stopScale() {
  // Remove the 'tiger' animation class
  const tiger = document.querySelector(".icon.tiger");
  if (tiger) {
    tiger.classList.remove("tiger");
  }
}
});
