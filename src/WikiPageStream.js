"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const texify_1 = require("./texify");
let Id = 0;
class WikiPageStream extends stream_1.Transform {
    constructor(options) {
        super(options);
        this.nskip = 0;
    }
    static create(nskip = 0, options) {
        if (!options)
            options = {};
        options.readableObjectMode = true;
        options.writableObjectMode = true;
        let ret = new WikiPageStream(options);
        ret.nskip = nskip;
        return ret;
    }
    // override
    _write(e, encoding, callback) {
        if (e.findChild('redirect') == null) {
            let textElement = e.findFirstDescendant('text');
            if (textElement && textElement.text) {
                let id = ++Id;
                let titleElement = e.findChild('title');
                if (id > this.nskip) {
                    let page = {
                        id,
                        title: titleElement ? titleElement.text : "<NA>",
                        content: texify_1.texify(textElement.text)
                    };
                    this.push(page);
                }
            }
        }
        callback();
    }
}
exports.WikiPageStream = WikiPageStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lraVBhZ2VTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaWtpUGFnZVN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFtRDtBQUduRCxxQ0FBZ0M7QUFFaEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRVgsb0JBQTRCLFNBQVEsa0JBQVM7SUFJM0MsWUFBb0IsT0FBeUI7UUFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSFQsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUkxQixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFnQixDQUFDLEVBQUUsT0FBMkI7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVc7SUFDWCxNQUFNLENBQUMsQ0FBVSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFDZCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksSUFBSSxHQUFhO3dCQUNuQixFQUFFO3dCQUNGLEtBQUssRUFBRSxZQUFZLEdBQUUsWUFBWSxDQUFDLElBQUksR0FBRyxNQUFNO3dCQUMvQyxPQUFPLEVBQUUsZUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsUUFBUSxFQUFFLENBQUM7SUFDYixDQUFDO0NBRUY7QUFyQ0Qsd0NBcUNDIn0=