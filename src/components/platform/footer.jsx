import {
    Footer,
    FooterColumn,
    FooterBottom,
    FooterContent,
} from "@/components/ui/footer";
import {useSelector} from "react-redux";

export default function FooterSection() {
    const theme = useSelector((state) => state.theme.mode);
    return (
        <footer className={`w-full px-4 ${theme === 1 ? "bg-black" : "bg-white"}`}>
            <div className="mx-auto max-w-container bg-transparent">
                <Footer className={`border-t pt-8 ${theme === 1 ? "bg-black text-white" : "bg-white text-black"}`}>
                    <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
                        <FooterColumn
                            className="col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold">udthedeveloper</h3>
                            </div>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Product</h3>
                            <a href="#" className="text-sm text-muted-foreground">
                                Changelog
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Documentation
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Company</h3>
                            <a href="#" className="text-sm text-muted-foreground">
                                About
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Careers
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Blog
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Contact</h3>
                            <a href="#" className="text-sm text-muted-foreground">
                                Discord
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Twitter
                            </a>
                            <a href="/" className="text-sm text-muted-foreground">
                                Github
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">Legal</h3>
                            <a href="#" className="text-sm text-muted-foreground">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-muted-foreground">
                                Cookie Policy
                            </a>
                        </FooterColumn>
                    </FooterContent>
                    <FooterBottom className="border-0">
                        <div>© 2025 <a href="/">udthedeveloper</a>. All rights reserved</div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
