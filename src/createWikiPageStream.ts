import {Readable} from 'stream';
import {WikiPageStream, WikiPage} from '../';
import {ElementStream, Element} from "xml-element-stream";

export const createWikiPageStream = (src: Readable, nskip? : number) : WikiPageStream => { 
  return src.pipe(
      ElementStream.create({tags: ['page']})
  ).pipe(
      WikiPageStream.create(nskip ? nskip : 0 )
  );
}