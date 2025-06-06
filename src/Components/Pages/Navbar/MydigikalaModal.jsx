const MydigikalaModal = () => {
  return (
    <div className="min-h-full w-full flex items-center flex-col justify-center">
      <div className="w-full flex flex-col justify-start items-center rounded-md p-5">
        {/* Logo */}
        <div className="w-full relative flex items-center justify-center mb-3">
          <img
            className="inline-block w-[100px]"
            src="https://www.digikala.com/brand/full-vertical.svg"
            alt=""
          />
        </div>
        {/* Login */}
        <div className="w-full">
          <h1 className="w-full text-right mt-4 text-[16px] leading-[2.1] text-[#0c0c0c] font-Bold">
            ورود | ثبت‌نام
          </h1>
          <p className="w-full text-right mt-4 text-[11px] leading-[2.17] text-[#3f4064]">
            سلام!
          </p>
          <p className="w-full text-right mb-4 text-[11px] leading-[2.17] text-[#3f4064]">
            لطفا شماره موبایل یا ایمیل خود را وارد کنید
          </p>
          <form>
            <label className="w-full inline-block">
                <div className="h-[48px] text-[#23254e] bg-[#f0f0f1] px-2 flex items-center rounded-lg w-full border-b border-b-[#19bfd3]">
                    <div className="grow">
                        <input className="text-[13px] leading-[2.15] w-full px-2 py-5 rounded-lg caret-[#19bfd3] focus:outline-none" type="text" />
                    </div>
                </div>
            </label>
            <button className="w-full h-[48px] relative flex items-center bg-[#ef4056] text-white text-[14px] leading-[2.15] rounded-lg mt-6">
              <div className="flex items-center justify-center relative grow">
                ورود
              </div>
            </button>
          </form>
          <p className="text-[10px] leading-[2.17] text-[#3f4064] mt-4">
            ورود شما به معنای پذیرش
            <a className="text-[#008eb2] inline-block mx-1" href="#">
              شرایط دیجی‌کالا
            </a>
            و
            <a className="text-[#008eb2] inline-block mx-1" href="#">
              قوانین حریم‌خصوصی
            </a>
            است
          </p>
        </div>
      </div>
    </div>
  );
};

export default MydigikalaModal;
