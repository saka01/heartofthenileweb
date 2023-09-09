import Footer from "./Footer"
export const Layout = ({children}) => {
    return(
        <>
            <header></header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}