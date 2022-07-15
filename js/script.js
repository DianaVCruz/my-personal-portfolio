/**=================================Typing animation======================================== */
var typed = new Typed(".typing",{
  strings:["","Web Designer","Web Developer","Graphic Designer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
})
  /**=================================Aside======================================== */
  const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection= document.querySelectorAll(".section"),
  totalSection = allSection.length;
  for(let i=0; i<totalNavList; i++){
  
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){

      removeBackSection();

      for(let j=0; j<totalNavList; j++){

        if(navList[j].querySelector("a").classList.contains("active")){

          addBackSection(j);
          //allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");

      }
      this.classList.add("active")
      showSection(this);
      if(window.innerWidth < 1200){
        asideSectionTogglerBtn();
      }
    })
  }

  function removeBackSection(){

    for(let i=0; i<totalSection; i++){
      allSection[i].classList.remove("back-section");
    }

  }

  function addBackSection(num){
    allSection[num].classList.add("back-section");
  }

  function showSection(element){

      for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
      }
      const target = element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("active")
  }

  function updateNav(element){
    for(let i=0; i<totalNavList; i++){
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");
      }
    }
  };

  document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  });

  document.querySelector(".last-works").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  });

  const navTogglerBtn= document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", ()=>{
          asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
          }
        };

/*=================================About======================================== */
/*=========================About - skills__tabs================================= */

const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
        tab.addEventListener("click", () =>{
          const target = document.querySelector(tab.dataset.target)

          tabContent.forEach(tabContents =>{
            tabContents.classList.remove('skills__active')
          })

          target.classList.add('skills__active')
          
          tabs.forEach(tab =>{
            tab.classList.remove('skills__active')
          })
          
          tab.classList.add('skills__active')
        })
      });
      
/*=================================Portfolio======================================== */
/*=========================Portfolio - mixitup-filter-portfolio================================= */
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))


/**=========work Popup========== */

document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("work__button")){
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup(){
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
  document.querySelector(".pp__thumbnail  img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}


/**===========Services modal============= */
const modalViews = document.querySelectorAll('.services__modal'),
      modelBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) =>{
  modelBtn.addEventListener("click", ()=>{
    modal(i)
  })
})

modalCloses.forEach((modalClose)=>{
  modalClose.addEventListener("click", ()=>{
    modalViews.forEach((modalView)=>{
      modalView.classList.remove('active-modal')
    })
  })
})

/**========= Swiper Testimonial========== */
let swiper = new Swiper(".testimonials__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});



/*********formulaio********/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_p7cncjz';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message sent successfully!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

