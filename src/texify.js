"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reRef = /<ref[^>]*?>[\s\S]*?<\/ref>/g;
const reComment = /<!--[\s\S]*?-->/g;
const reCurly = /{{[\s\S]*?}}/g;
const reLines = /[\n]{3,}/g;
const reSquare = /\[\[([^|]*?)\]\]/g;
const reSquareOption = /\[\[[^\]]*\|(.*?)\]\]/g;
const reNbsp = /&nbsp;/g;
const reQuote = /'{2,3}([^']+?)'{2,3}/g;
exports.texify = (text) => {
    return text.replace(reRef, "") // remove <ref>...</ref>
        .replace(reComment, "") // remove <!-- ... -->
        .replace(reCurly, "") // remove {{ ... }}
        .replace(reSquareOption, "$1") // replace [[a|b|c]] with c
        .replace(reSquare, "$1") // replace [[a]] with a
        .replace(reQuote, "$1") // replace ''a'' or '''a''' with 'a'
        .replace(reNbsp, "") // replace &nbsp; with space
        .replace(reLines, "\n\n") // single line break everywhere
    ;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4aWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV4aWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsNkJBQTZCLENBQUM7QUFDNUMsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFDckMsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQ2hDLE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUM1QixNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUNyQyxNQUFNLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQztBQUNoRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDekIsTUFBTSxPQUFPLEdBQUcsdUJBQXVCLENBQUM7QUFFM0IsUUFBQSxNQUFNLEdBQUcsQ0FBQyxJQUFZO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBSSx3QkFBd0I7U0FDckQsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBTyxzQkFBc0I7U0FDbkQsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBUyxtQkFBbUI7U0FDaEQsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBRSwyQkFBMkI7U0FDMUQsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBTSx1QkFBdUI7U0FDcEQsT0FBTyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBUSxvQ0FBb0M7U0FDakUsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBVSw0QkFBNEI7U0FDekQsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBSywrQkFBK0I7S0FDNUQ7QUFDUCxDQUFDLENBQUEifQ==