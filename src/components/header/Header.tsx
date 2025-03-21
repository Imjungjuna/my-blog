"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import LanguageSelector from "@/components/about/language-selector";
// import ScrollProgressBar from "@/components/common/ScrollProgressBar";
// import { Button } from "@/components/ui/button";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
// import { useSpyElem } from "@/hook/useSpy";
import { cn } from "@/lib/utils";
// import { FaGithub } from "react-icons/fa";
import { FC } from "react";

// const localePathList = ["/about"];

const Header: FC = () => {
  // const { ref, marginTop } = useSpyElem(65);
  const pathname = usePathname();
  // const isLocalePath = localePathList.some((path) => pathname.startsWith(path));

  //mt-1은 ProgressBar의 유무에 따라 선택적으로 적용해야함, 근데 애초에 왜 적용이 안될까? important 맥이니까 되네 아 global.css 때문이였구나.

  return (
    <nav
      // style={{ marginTop }}
      // ref={ref}
      className="bg-amber-500 fixed w-full border-b shadow-sm print:hidden"
    >
      <div className="h-12 md:h-16 mt-1 w-full max-w-[1200px] items-center flex justify-between px-2 md:px-4">
        <Link
          href="/about"
          className={cn(
            "rounded-full px-4 py-1 text-center text-sm transition-colors text-[--softText] bg-white",
            pathname?.startsWith("about") ? "text-red" : "text-red"
          )}
        >
          About
        </Link>

        <div></div>
      </div>
      <ScrollProgressBar />
    </nav>
  );
};

export default Header;
