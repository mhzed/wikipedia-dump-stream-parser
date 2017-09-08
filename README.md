wikipedia-dump-stream-parser
--------

Pure fast javascript only solution to parse wikipedia xml dump.

  import {createWikiPageStream} from "wikipedia-dump-stream-parser"

  createWikiPageStream(process.stdin).on('data', (page)=>{
      // page.id, page.title, page.content 
  }).on('end', ()=>{
      process.exit(0)
  });
  
  // skip first 100 pages
  createWikiPageStream(process.stdin, 100).on('data', (page)=>{
     // page.id, page.title, page.content 
  }).on('end', ()=>{
     process.exit(0)
  });
 