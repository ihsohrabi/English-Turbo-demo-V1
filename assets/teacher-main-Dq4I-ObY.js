import{S as i}from"./swiper-bundle-CGqGFqqG.js";let u=()=>{let e=t=>document.querySelector(t),a=t=>document.querySelectorAll(t),r=()=>{a(".other-cards").forEach(t=>{t.classList.contains("translate-x-[600px]")&&t.classList.contains("rotate-45")&&(e(".etc-menu").style.display="none")})};const s=()=>{e("#teacherData").classList.add("-translate-x-full")},o=()=>{e("#teacherData").classList.add("translate-x-full")};e("#navrightbtn").addEventListener("click",s),e("#navleftbtn").addEventListener("click",o);let n=0;e("#navrightbtn").addEventListener("touchstart",t=>{n=t.changedTouches[0].clientX}),e("#navleftbtn").addEventListener("touchstart",t=>{n=t.changedTouches[0].clientX}),e("#navrightbtn").addEventListener("touchend",t=>{const c=t.changedTouches[0].clientX;n-c>50&&s()}),e("#navleftbtn").addEventListener("touchend",t=>{const c=t.changedTouches[0].clientX;n-c<50&&o()}),a("#navbackbtn").forEach(t=>{t.addEventListener("click",()=>{e("#teacherData").classList.remove("-translate-x-full"),e("#teacherData").classList.remove("translate-x-full")})}),a(".teacher-info-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-info-card").classList.remove("translate-x-[600px]"),e(".teacher-info-card").classList.remove("rotate-45"),r()})}),a(".teacher-class-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-class-card").classList.remove("translate-x-[600px]"),e(".teacher-class-card").classList.remove("rotate-45"),r()})}),a(".teacher-contact-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-contact-card").classList.remove("translate-x-[600px]"),e(".teacher-contact-card").classList.remove("rotate-45"),r()})}),a(".teacher-rules-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-rules-card").classList.remove("translate-x-[600px]"),e(".teacher-rules-card").classList.remove("rotate-45"),r()})}),a(".teacher-registration-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-registration-card").classList.remove("translate-x-[600px]"),e(".teacher-registration-card").classList.remove("rotate-45"),r()})}),a(".teacher-qc-btn").forEach(t=>{t.addEventListener("click",()=>{e(".teacher-qc-card").classList.remove("translate-x-[600px]"),e(".teacher-qc-card").classList.remove("rotate-45"),r()})}),a(".card-close-btn").forEach(t=>{t.addEventListener("click",()=>{a(".other-cards").forEach(c=>{!c.classList.contains("translate-x-[600px]")&&!c.classList.contains("rotate-45")&&(c.classList.add("rotate-45"),c.classList.add("translate-x-[600px]"),e(".etc-menu").style.display="flex")})})});let l=0;e("#rotate-btn").addEventListener("click",()=>{l+=180,e("#main-card").style.transform=`rotateY(${l}deg)`,e("#back-card").style.transform=`rotateY(${l+180}deg)`})},x=()=>{let e=s=>document.querySelector(s),a=` <form class="w-full p-1" id="qcform">
                  <label
                    class="bullet titleText"
                    for="nounce"
                    >کد یکبار مصرف خود را وارد کنید</label
                  >
                  <input
                  id="nounce"
                    type="text"
                    placeholder="مثال: 2ac7fb"
                    class="!font-sans w-full h-[30px] mt-2 text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                  <input
                    type="submit"
                    value="تایید"
                    class="w-full h-[30px] text-white bg-[#ef4444] text-[12px] px-2 my-3 text-[#] border rounded-md focus:outline-[#ef4444]"
                  />
                </form>`,r=`                                <form id="qcRateForm" class="w-full">
                  <div class="w-full flex flex-col relative overflow-hidden">
                    <label
                      for="qc-Range"
                      class="titleText bullet mb-5 mt-2"
                    >
                      به استاد خود از ۱ تا ۵ نمره ای بدهید!
                    </label>
                    <input
                      dir="ltr"
                      class="w-full right"
                      type="range"
                      id="qc-Range"
                      min="1"
                      max="5"
                      value="3"
                    />
                    <div
                      dir="ltr"
                      class="w-full h-[25px] flex justify-between items-center px-[12px] font-yekan-bakh-bold mt-[4px] rounded-full border-b-2 border-[#2b2b2b44] shadow-sm"
                    >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >1</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >2</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >3</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >4</span
                      >
                      <span class="text-[10px] text-center leading-4 w-4 h-4"
                        >5</span
                      >
                    </div>
                    <label
                      for="qc-text"
                      dir="rtl"
                      class="titleText bullet my-4"
                    >
                      خوشحال میشیم نظرتم بگی برامون...
                    </label>
                    <textarea
                      dir="rtl"
                      placeholder="در این دوره..."
                      class="w-full min-h-[5em] resize-none border-[1px] border-[#ef4444aa] p-2 text-[10px] overflow-auto no-scrollbar rounded-md text-[#4d4d4d] focus:outline-[#ef4444] focus:shadow-inner"
                      name="qc-text"
                      id="qc-text"
                      rows="4"
                    ></textarea>
                    <div class="w-full h-[60px] flex gap-2 mt-2">
                      <input
                        type="submit"
                        value="ارسال نظر"
                        class="w-[60%] h-[30px] text-white bg-green-500 text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                      />
                      <input
                        id="qc-cancel"
                        type="button"
                        value="انصراف"
                        class="w-[35%] h-[30px] text-white bg-[#ef4444] text-[12px] px-2 text-[#] border rounded-md focus:outline-[#ef4444]"
                      />
                    </div>
                  </div>
                </form>`;e("#qc-form-container").insertAdjacentHTML("beforeend",a),e("#qcform").addEventListener("submit",s=>{s.preventDefault(),e("#qcform").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",r),e(".qc-close").addEventListener("click",()=>{e("#qcRateForm").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",a)}),e("#qc-cancel").addEventListener("click",()=>{e("#qcRateForm").remove(),e("#qc-form-container").insertAdjacentHTML("beforeend",a)})})};new i(".mySwiper",{autoplay:{delay:1e4,disableOnInteraction:!1},direction:"vertical"});new i(".navSwiper",{slidesPerView:"auto",spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0}});u();x();document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.querySelector("#main-card").classList.toggle("-rotate-y-180"),document.querySelector("#back-card").classList.toggle("rotate-y-180"),document.querySelector("#bg-blur").classList.add("backdrop-blur-[3px]")},1500),setTimeout(()=>{document.querySelector(".etc-menu").classList.remove("opacity-0")},2e3)});
