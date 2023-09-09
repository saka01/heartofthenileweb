import Footer from "./Footer"
import Header from "./Header"
export const Layout = ({children, currentPage}) => {
    return(
        <>
            <Header page={currentPage} />
            <main className="px-24 py-20">
                {children}
            </main>
            <Footer />
        </>
    )
}