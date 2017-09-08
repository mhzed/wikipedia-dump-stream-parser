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
            let id = ++Id;
            if (id > this.nskip) {
                let page = {
                    id,
                    title: e.findChild('title').text,
                    content: texify_1.texify(e.findFirstDescendant('text').text)
                };
                this.push(page);
            }
        }
        callback();
    }
}
exports.WikiPageStream = WikiPageStream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lraVBhZ2VTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXaWtpUGFnZVN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFtRDtBQUduRCxxQ0FBZ0M7QUFFaEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRVgsb0JBQTRCLFNBQVEsa0JBQVM7SUFJM0MsWUFBb0IsT0FBeUI7UUFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSFQsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUkxQixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFnQixDQUFDLEVBQUUsT0FBMkI7UUFDMUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbEMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFdBQVc7SUFDWCxNQUFNLENBQUMsQ0FBVSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLEdBQWE7b0JBQ25CLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSTtvQkFDaEMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUNwRCxDQUFDO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7UUFFRCxRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FFRjtBQWxDRCx3Q0FrQ0MifQ==