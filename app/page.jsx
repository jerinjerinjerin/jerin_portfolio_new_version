import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section className="h-full w-full">
       <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
            {/* text */}
          <div className="text-center mb-8 xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Doveloper</span>
            <h1 className="h1 mb-6">
              Hellow I,m <br/>
             <span className="text-blue-700">Jerin Raj</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I excal at crafting elegant digital experiences and I am
              proficient in MERM Stack and Nextjs technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                  <span className="">Download CV</span>
                  <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyles="size-9 border broder-blue-700 rounded-full flex
                  justify-center items-center text-blue-700 text-base hover:bg-blue-700
                  hover:text-black hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
       </div>
    </section>
  )
}

export default Home