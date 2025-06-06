import { useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Redux/Posts/ActionPosts";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className="w-full bg-white lg:rounded-2xl">
        {/* Title */}
        <div className="flex justify-between items-center py-4 px-5">
          <div className="text-[16px] text-[#0c0c0c] font-Bold mb-1.5">خواندنی‌ها</div>
          <span className="shrink-0">
            <a
              className="inline-flex items-center cursor-pointer text-[12px] text-[#19bfd3]"
              href="#"
            >
              <span className="font-Medium">مطالب بیشتر در دیجی‌کالا مگ</span>
              <div className="flex">
                <MdOutlineKeyboardArrowLeft className="w-[18px] h-[18px]" />
              </div>
            </a>
          </span>
        </div>
        {/* Slides */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 lg:px-0">
          {posts?.map((post) => {
            return (
              <a
              key={post.id}
                className="bg-white mb-1 border border-[#e0e0e2] rounded-lg flex flex-col h-full overflow-hidden"
                href="#"
              >
                <div className="leading-0">
                  <img
                    className="w-full inline-block object-cover aspect-[610/380]"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="w-full text-right mt-2 mb-3 px-4 text-[12px] text-[#0c0c0c]">
                  {post.title}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
