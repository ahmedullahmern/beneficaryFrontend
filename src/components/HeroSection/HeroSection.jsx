import { Typewriter } from 'react-simple-typewriter'
import rightimg from "../../assets/rightimg.webp"

function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row justify-between px-5 py-10 items-center">
            {/* Left Side */}
            <div className="space-y-6 md:w-1/2">
                <h1 className="font-semibold text-4xl ">
                    Welcome to the <span style={{ color: "#8DC63F" }}>Saylani</span> Welfare <br />
                    Non Governmental Organization<br /> in Pakistan
                </h1>

                {/* Animated Text */}
                <h2 className="text-2xl font-medium text-gray-700">
                    The largest NGO offering free{' '}
                    <span className="text-blue-500">
                        <Typewriter
                            words={['Healthcare', 'Education', 'Food', 'Shelter', 'Support']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
                <div className=''>
                    <p>Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.</p>
                </div>
            </div>

            {/* Right Side Image */}
            <div className="w-[60%] md:w-[30%] mt-8 md:mt-0">
                <img src={rightimg} alt="Saylani Image" className="rounded-lg" />
            </div>
        </div>
    )
}

export default HeroSection
