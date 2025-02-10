import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {ArrowRightIcon} from "lucide-react";
import {Section} from "@/components/ui/section";
import {Mockup, MockupFrame} from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import {useTheme} from "next-themes";
import Github from "@/components/logos/github";
import {useSelector} from "react-redux";
import {AuroraText} from "@/components/magicui/aurora-text";
import {Confetti} from "@/components/magicui/confetti";
import {useRef, useEffect} from "react";
import me from "../../assets/me.png";

export default function Hero() {
    const confettiRef = useRef(null);
    const theme = useSelector((state) => state.theme.mode);

    useEffect(() => {
        confettiRef.current?.fire({});
    }, []);

    return (<Section
        className={`fade-bottom h-screen overflow-hidden pb-10 sm:pb-10 md:pb-10 ${theme == 1 ? "bg-black" : "bg-white"}`}
    >
        <div className="mx-auto flex  max-w-container flex-col gap-12 sm:gap-24">
            <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
                <div className={`absolute right-0 top-0 opacity-30 hidden md:block`}>
                    <img src={me} alt=""/>
                </div>
                <Badge
                    variant="outline"
                    className={`animate-appear border ${theme == 0 ? "border-muted-foreground" : "border-base-content"}`}
                >
            <span
                className={theme == 0 ? `text-muted-foreground` : `font-medium text-muted-foreground`}
            >
              Checkout my workspace!
            </span>
                    <a
                        href="/"
                        className={`flex items-center gap-1 ${theme == 1 ? "text-neutral-content" : "text-blue-500"}`}
                    >
                        Here
                        <ArrowRightIcon className="h-3 w-3"/>
                    </a>
                </Badge>

                <Confetti
                    ref={confettiRef}
                    className="absolute left-0 top-0 z-0 size-full"
                />

                <h1
                    className={`${theme == 1 ? "text-base-content" : "text-black"} z-10 inline-block animate-appear bg-clip-text text-4xl font-semibold leading-tight drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight`}
                >
                    You've arrived at the perfect place! It's{" "}
                    <a href="/" className="text-blue-500 underline">
                        Udaykumar Dhokia's
                    </a>{" "}
                    portfolio.
                </h1>
                <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern apps and stunning web
                    designs. My passion is to design digital user experiences through
                    the bold interface and meaningful interactions.
                </p>
                <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
                    <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className={`rounded-full ${theme == 1 ? "bg-base-content text-black" : "bg-black"}`}
                        >
                            <a href="/">Explore my work</a>
                        </Button>
                        <Button
                            variant="glow"
                            size="lg"
                            asChild
                            className={`rounded-full ${theme == 1 ? "text-white" : ""}`}
                        >
                            <a href="/">
                                <Github className="mr-2 h-4 w-4"/> Github
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </Section>);
}
