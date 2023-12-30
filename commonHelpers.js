import"./assets/modulepreload-polyfill-ec808ebb.js";const c=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],n=document.querySelector(".gallery");n.innerHTML=s(c);function s(o){return o.map(({preview:e,original:t,description:a})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${e}"
          data-source="${t}"
          alt="${a}"
        />
      </a>
    </li>`).join("")}n.addEventListener("click",r);function r(o){if(o.preventDefault(),o.target===o.currentTarget)return;const e=o.target.dataset.source,t=o.target.dataset.description,a=basicLightbox.create(`
      <div class="modal">
          <img
          class="modal-image"
          src="${e}"
          alt="${t}"
        />
    </div>
  `,{onShow:i=>{document.addEventListener("keydown",p)},onClose:i=>{document.removeEventListener("keydown",p)}});a.show();function p(i){i.code==="Escape"&&a&&a.close()}a.element().querySelector(".modal-image").addEventListener("click",()=>{a.close()})}
//# sourceMappingURL=commonHelpers.js.map
