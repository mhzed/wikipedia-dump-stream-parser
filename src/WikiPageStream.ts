
import {Transform, TransformOptions} from 'stream';
import {WikiPage} from "./WikiPage";
import {Element, ElementStream} from "xml-element-stream";
import {texify} from "./texify";

let Id = 0;

export class WikiPageStream extends Transform {

  private nskip: number = 0;
  
  private constructor(options: TransformOptions) {
    super(options);
  }

  static create(nskip: number = 0, options? : TransformOptions) : WikiPageStream {
    if (!options) options = {};
    options.readableObjectMode = true;
    options.writableObjectMode = true;
    let ret = new WikiPageStream(options);
    ret.nskip = nskip;
    return ret;
  }

  // override
  _write(e: Element, encoding, callback) : void {
    if (e.findChild('redirect') == null) {
      let id = ++Id;
      if (id > this.nskip) {
        let page: WikiPage = {
          id,
          title: e.findChild('title').text,
          content: texify(e.findFirstDescendant('text').text)
        };
        this.push(page);
      }
    }

    callback();
  }
  
}