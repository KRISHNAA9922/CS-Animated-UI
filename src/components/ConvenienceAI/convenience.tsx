import { LottieAnimation } from './lottieAnimation';
import VerticalSLider from './vertical-slider';

function Convenience() {
    return (
        <div className="bg-[#F7FAFA] py-6 md:py-6">
            <h1 className="text-[2.5rem] md:text-[3rem] xl:text-[4rem] text-center font-[400] py-2 md:py-6 px-4">
                Convenience, <em>powered by AI</em>
            </h1>
            <div className="flex justify-center gap-8  items-start w-full lg:flex-row flex-col py-8 px-6 mx-auto">
                <LottieAnimation />
                <VerticalSLider />
            </div>
        </div>
    );
}

export default Convenience;
