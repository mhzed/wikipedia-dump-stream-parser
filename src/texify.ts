
const reRef = /<ref[^>]*?>[\s\S]*?<\/ref>/g;
const reComment = /<!--[\s\S]*?-->/g;
const reCurly = /{{[\s\S]*?}}/g;
const reLines = /[\n]{3,}/g; 
const reSquare = /\[\[([^|]*?)\]\]/g;
const reSquareOption = /\[\[[^\]]*\|(.*?)\]\]/g;
const reNbsp = /&nbsp;/g;
const reQuote = /'{2,3}([^']+?)'{2,3}/g;

export const texify = (text: string) : string => {
  return text.replace(reRef, "")    // remove <ref>...</ref>
      .replace(reComment, "")       // remove <!-- ... -->
      .replace(reCurly, "")         // remove {{ ... }}
      .replace(reSquareOption, "$1")  // replace [[a|b|c]] with c
      .replace(reSquare, "$1")      // replace [[a]] with a
      .replace(reQuote,"$1")        // replace ''a'' or '''a''' with 'a'
      .replace(reNbsp, "")          // replace &nbsp; with space
      .replace(reLines, "\n\n")     // single line break everywhere
      ;
}
