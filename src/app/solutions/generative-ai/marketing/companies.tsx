import Image from "next/image";
import Images from "../global/images";
import Marquee from "../ui/marquee";
import google from "./logos--google.svg?url";
import microsoft from "./logos--microsoft.svg?url";
import salesforce from "./devicon--salesforce.svg?url";
import adobe from "./logos--adobe.svg?url";
import hubspot from "./logos--hubspot (1).svg?url";
import meta from "./logos--meta.svg?url";

const Companies = () => {
  return (
    <div className="flex w-full py-20">
      <div className="flex flex-col items-center justify-center text-center w-full py-2">
        <h2 className="text-xl heading">
          Trusted by Innovators Using Generative AI
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Leading companies are leveraging generative AI to drive
          transformation, automation, and creativity across industries.
        </p>
        <div className="mt-16 w-full relative overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            <div className="flex gap-8 md:gap-12">
              <Image src={google} alt="" className="w-24 h-8 ml-2" />
              <Image src={microsoft} alt="" className="w-24 h-8" />
              <Image src={salesforce} alt="" className="w-24 h-8" />
              <Image src={adobe} alt="" className="w-24 h-8" />
              <Image src={hubspot} alt="" className="w-24 h-8" />
              <Image src={meta} alt="" className="w-24 h-8" />
              <Images.company1 className="w-24 h-8" />
              <Images.company2 className="w-24 h-8" />
              <Images.company3 className="w-24 h-8" />
              <Images.company4 className="w-24 h-8" />
              <Images.company5 className="w-24 h-8" />
              <Images.company6 className="w-24 h-8" />
              <Images.company7 className="w-24 h-8" />
              <Images.company8 className="w-24 h-8" />
              <Images.company9 className="w-24 h-8" />
              <Images.company10 className="w-24 h-8" />
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
