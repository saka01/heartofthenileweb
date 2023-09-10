import Footer from "./Footer"
import Header from "./Header"
export const Layout = ({children, currentPage}) => {
    return(
        <>
            <Header page={currentPage} />
            <main className="">
                {children}
            </main>
            <Footer />
        </>
    )
}