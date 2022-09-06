import React, { useEffect } from "react"
import { useState } from "react"

const SideAd = () => {
  const [teste, setTeste] = useState(1)

  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        console.log("teste")
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <button onClick={() => {setTeste(teste+1)}}>teste</button>
      <ins
        className={"adsbygoogle"+teste}
        style={{ display: "block" }}
        data-ad-client="ca-pub-9645579603385719"
        data-ad-slot="9441680405"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >teste{teste}</ins>
    </div>

  )
}

export default SideAd