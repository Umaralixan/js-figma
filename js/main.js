
document.body.className = "bg-slate-200";
let elHeader = document.createElement("header");
let elContainerDiv = document.createElement("div");

let elLogoLink = document.createElement("a");
let elLogoImg = document.createElement("img");

let elNavbar = document.createElement("nav");
let navList = ["FAQ", "Docs", "Integrations", "Pricing"];


navList.forEach((item) => {
  let elNavLink = document.createElement("a");
  elNavLink.href = "/";
  elNavLink.textContent = item;
  elNavLink.className = "text-[18px]";
  elNavbar.appendChild(elNavLink);
});

let elAutehBtnWrapper = document.createElement("div")
let elLoginBtn = document.createElement("button");
let elSignUpBtn = document.createElement("button");

elHeader.className = "site-header py-[20px] bg-white";
elContainerDiv.className = "containers flex items-center justify-between";
elLogoLink.href = "/";
elLogoImg.src = "./images/logo.svg";
elLogoImg.alt = "Logo img";
elLogoImg.width = 157;
elLogoImg.height = 24;
elHeader.className += " flex items-center gap-[30px]";
elAutehBtnWrapper.className = "flex item-center gap-[30px]"
elLoginBtn.type = "button"
elLoginBtn.className = "text-[18px] text-[535479]"
elLoginBtn.textContent = "Login"
elSignUpBtn.type = "button";
elSignUpBtn.className = "text-[18px] text-white bg-[#0E0B3D] py-[8px] px-[24px] rounded-[40px]";
elSignUpBtn.textContent = "Sign Up";

document.body.appendChild(elHeader);
elHeader.appendChild(elContainerDiv);
elContainerDiv.appendChild(elLogoLink);
elLogoLink.appendChild(elLogoImg);
elContainerDiv.appendChild(elNavbar);
elContainerDiv.appendChild(elAutehBtnWrapper);
elAutehBtnWrapper.appendChild(elLoginBtn)
elAutehBtnWrapper.appendChild(elSignUpBtn);

// ################HERO#########################

let elHero = document.createElement("section");
let elHeroContainer = document.createElement("div");
let elHeroTitle = document.createElement("h1");
let elHeroDesc = document.createElement("p");
let elHeroBtn = document.createElement("button");

// Classlar
elHero.className = "hero py-[120px] bg-white";
elHeroContainer.className = "containers text-center flex flex-col items-center gap-[20px]";
elHeroTitle.className =
  "text-[48px] font-400 leading-[60px] text-[#0E0B3D] max-w-[800px]";
elHeroDesc.className = "text-[18px] text-[#4b5578] max-w-[600px]";
elHeroBtn.className =
  "mt-[50px] px-[24px] py-[12px] rounded-[50px] bg-[#030122] text-white";

// Content
elHeroTitle.textContent = "Get emails and messages from your HTML form";
elHeroDesc.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.";
elHeroBtn.textContent = "Get Started";

// Append
document.body.appendChild(elHero);
elHero.appendChild(elHeroContainer);
elHeroContainer.appendChild(elHeroTitle);
elHeroContainer.appendChild(elHeroDesc);
elHeroContainer.appendChild(elHeroBtn);


// ###################FOOTER#################

let elFooter = document.createElement("footer");
let elFooterContainer = document.createElement("div");
let elFooterLeft = document.createElement("p");
let elFooterLinks = document.createElement("div");
let elTerms = document.createElement("a");
let elItems = document.createElement("a");
let elFooterSocial = document.createElement("div");
let elTwitter = document.createElement("a");
let elTwitterImg = document.createElement("img");
let elGithub = document.createElement("a");
let elGithubImg = document.createElement("img");
let elFasebook = document.createElement("a");
let elFasebookImg = document.createElement("img");

// Classlar
elFooter.className = "bg-[#f8f9fc] py-[40px]";
elFooterContainer.className = "containers flex justify-between items-center";
elFooterLeft.className = "text-[#4b5578]";
elFooterLinks.className = "flex gap-[20px]";
elFooterSocial.className = "flex gap-[20px]";

// Content
elFooterLeft.textContent = "formcarry. all rights reserved";
elTerms.href = "/";
elTerms.textContent = "Terms of Service";
elTerms.className = "text-[#4b5578]";
elItems.href = "/";
elItems.textContent = "Privacy Policy";
elItems.className = "text-[#4b5578]";

// Rasm 
elFasebook.href = "/";
elFasebookImg.src = "./images/tiwettir.svg";
elFasebookImg.alt = "tiwetter";
elFasebookImg.className = "w-[24px] h-[24px]";

elTwitter.href = "/";
elTwitterImg.src = "./images/github.svg";  
elTwitterImg.alt = "github";
elTwitterImg.className = "w-[24px] h-[24px]";

elGithub.href = "/";
elGithubImg.src = "./images/fasebok.svg";
elGithubImg.alt = "fasebok";
elGithubImg.className = "w-[24px] h-[24px]";

// Append
document.body.appendChild(elFooter);
elFooter.appendChild(elFooterContainer);
elFooterContainer.appendChild(elFooterLeft);
elFooterContainer.appendChild(elFooterLinks);
elFooterLinks.appendChild(elTerms);
elFooterLinks.appendChild(elItems);
elFooterContainer.appendChild(elFooterSocial);
elFooterSocial.appendChild(elFasebook);
elFasebook.appendChild(elFasebookImg)
elFooterSocial.appendChild(elTwitter);
elTwitter.appendChild(elTwitterImg);
elFooterSocial.appendChild(elGithub)
elGithub.appendChild(elGithubImg);;
