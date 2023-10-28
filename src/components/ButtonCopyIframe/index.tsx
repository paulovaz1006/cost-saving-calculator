'use client'

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useGeneratedIFrame } from "./hooks/useGeneratedIFrame";
import { memo } from "react";

function ButtonCopyIframe() {
  const [copyHTMLIframe, copied, iframeHTML] = useGeneratedIFrame()

  return (
    <CopyToClipboard 
      onCopy={() => copyHTMLIframe} 
      text={iframeHTML.toString()}>
      <div className='button-copy'>
        {copied && <p>Iframe copyed</p>}
        <button type='button'>Copy Iframe code HTML</button>
      </div>  
    </CopyToClipboard>
  )
}

export default memo(ButtonCopyIframe)
