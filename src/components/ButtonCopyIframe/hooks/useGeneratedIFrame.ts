import { useEffect, useState } from "react";

export const useGeneratedIFrame = () => {
  const [copied, setCopied] = useState(false);
  const [urlLocal, setUrlLocal] = useState('');

  const iframeHTML: string = `<iframe src="${urlLocal}" width="100%" height="700"></iframe>`;
  
  useEffect(() => {
    const url = window.location.href;
      setUrlLocal(url)
  }, [])

  const copyHTMLIframe = () => {
    setCopied(true);

    setTimeout(() => {
       setCopied(false);
    }, 3000)
  }
  return [copyHTMLIframe, copied, iframeHTML]
}


