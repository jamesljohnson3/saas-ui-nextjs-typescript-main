import Image from 'next/image'
import SectionWrapper from '../../SectionWrapper'

const logos = [
    {
        src: "freshbooks",
        alt: "freshbooks"
    }
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
                Trusted by the largest companies
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid