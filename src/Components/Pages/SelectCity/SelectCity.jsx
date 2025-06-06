import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { LuMapPin } from "react-icons/lu";
import { IoClose, IoSearch } from "react-icons/io5";
import { IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../Redux/SelectCity/ActionSelectCity";
import { useEffect } from "react";

const searchItems = [
  "تهران",
  "کرج",
  "اصفهان",
  "مشهد",
  "ساری",
  "رشت",
  "اهواز",
  "تبریز",
  "شیراز",
  "ارومیه",
];

export default function SelectCity() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [searchTerm, setSearchTerm] = React.useState("");

  const { cities } = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <React.Fragment>
        <div className="flex items-center text-neutral-700 cursor-pointer pb-1 pt-2 mt-2 lg:mt-0 lg:pt-0">
          <div className="group">
            <div>
              <div className="flex items-center justify-between gap-2 rounded-full cursor-pointer px-3 py-1 lg:text-orange1 lg:bg-orange1/10">
                <div className="flex">
                  <LuMapPin className="w-[19px] h-5 lg:text-orange1 text-gray-800" />
                </div>
                {/* Desktop */}
                <p
                  onClick={handleClickOpen("paper")}
                  className="hidden lg:flex font-Medium text-[13px] whitespace-nowrap"
                >
                  شهر خود را انتخاب کنید
                </p>
                {/* Mobile */}
                <p
                  onClick={handleClickOpen("paper")}
                  className="lg:hidden font-Medium text-[12px] whitespace-nowrap text-gray-950"
                >
                  انتخاب استان و شهر{" "}
                </p>
                <MdKeyboardArrowLeft className="lg:hidden text-2xl" />
              </div>
            </div>
            <div className="hidden w-[350px] h-auto p-4 rounded-[5px] absolute left-[1%] top-[105%] group-hover:block text-[13px] text-white bg-[#4e4e6f] leading-6 z-50">
              برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال، شهر را انتخاب کنید.
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          PaperProps={{
            sx: {
              width: "490px",
              height: "700px",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <DialogTitle
            id="scroll-dialog-title"
            sx={{ p: 0, mb: 2, background: "transparent" }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              px={2}
              pt={2}
            >
              {/* Desktop */}
              <span className="font-Medium flex-1 lg:text-[17px] text-[15px]">
                انتخاب شهر
              </span>
              <button
                onClick={handleClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  marginLeft: 8,
                  display: "flex",
                  alignItems: "center",
                }}
                aria-label="close"
              >
                <IoClose size={24} color="#424750" />
              </button>
            </Box>
          </DialogTitle>{" "}
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {/* Top Search Bar */}
              <div className="flex items-center max-w-full bg-[#f0f0f1] rounded-md sticky top-0 z-10 h-[44px]">
                {/* Right Icon */}
                <IconButton onClick={handleClose} aria-label="close">
                  <IoSearch className="w-[23px] text-[#81858b]" />
                </IconButton>
                <input
                  type="text"
                  placeholder="جستجو در استان ها و شهرهای ایران"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow border-none outline-none bg-transparent placeholder:text-[#8a8a8a] placeholder:font-Regular placeholder:text-[12px]"
                />
              </div>
              {/* Text On Hover */}
              <div className="font-Regular text-[#424242] lg:text-[14px] text-[12px] my-3.5 leading-6">
                برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال به شهرتان، آن را
                انتخاب کنید.
              </div>
            </DialogContentText>
            {/* Swiper for Popular Cities */}
            <div>
              <div className="py-2">
                <div className=" cursor-pointer block lg:px-4 xs:py-2">
                  <div className="flex justify-between items-start">
                    <div className="grow text-right">
                      <div className="grow text-[#3f4064] font-Bold leading-8 lg:text-[16px] text-[14px]">
                        شهرهای پرتکرار
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="w-full gap-2 py-2.5 overflow-x-auto">
                    <Swiper spaceBetween={10} slidesPerView="auto">
                      {searchItems.map((item, index) => {
                        return (
                          <SwiperSlide key={index} className="!w-auto">
                            <button className="px-3 py-2 rounded-full border border-[#e0e0e0] bg-white text-[#3f4064] font-Bold whitespace-nowrap cursor-pointer flex items-center gap-2 lg:text-[16px] text-[12px]">
                              {item}
                              <div>
                                <MdKeyboardArrowLeft className="text-neutral-700 font-Bold text-[25px]" />
                              </div>
                            </button>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            {/* City List */}
            <div className="w-full">
              <div className="py-2 max-h-[700px]">
                {cities?.map((city) => {
                  return (
                    <div key={city.id}>
                      {city.cities.map((item, index) => {
                        return (
                          <button
                            key={`${city.id}-${index}`}
                            className="w-full px-2 py-3 border-b border-b-[#f0f0f1] bg-white  whitespace-nowrap cursor-pointer flex justify-between items-center gap-2 lg:text-[16px] text-[13px]"
                          >
                            <div>
                              <span className="text-[#3f4064] font-Bold">
                                {item}
                              </span>
                              {"\u00A0"}
                              <span className="text-[#81858b]">
                                در {city.mainCity}
                              </span>
                            </div>
                            <MdKeyboardArrowLeft className="text-neutral-700 font-bold text-[25px]" />
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </>
  );
}
