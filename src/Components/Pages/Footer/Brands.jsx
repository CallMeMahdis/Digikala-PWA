const brands = [
  "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
  "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
  "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
  "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
  "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
  "https://www.digikala.com/statics/img/svg/footer/jet.svg",
  "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
  "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
  "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
  "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
  "https://www.digikala.com/statics/img/svg/footer/digify.svg",
  "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
  "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
  "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
];

const Brands = () => {
  return (
    <>
      {brands.map((brand, index) => {
        return (
          <a
            key={index}
            className="w-[33%] lg:w-[12%] h-20 lg:h-[80px] flex flex-col items-center justify-center grow px-5 border-b border-b-[#e0e0e2] border-r border-r-[#e0e0e2]"
            href="#"
          >
            <div className="h-[20px] leading-0">
              <img
                className="w-full h-[20px] inline-block object-contain"
                src={brand}
                alt=""
              />
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Brands;
