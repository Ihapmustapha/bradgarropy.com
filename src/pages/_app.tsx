import "styles/global.css"

import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import type {AppProps} from "next/app"

const App = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <GoogleAnalytics
                measurementId={
                    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID
                }
            />

            <Component {...pageProps} />
        </>
    )
}

export default App
