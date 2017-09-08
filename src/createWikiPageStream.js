"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
const xml_element_stream_1 = require("xml-element-stream");
exports.createWikiPageStream = (src, nskip) => {
    return src.pipe(xml_element_stream_1.ElementStream.create({ tags: ['page'] })).pipe(_1.WikiPageStream.create(nskip ? nskip : 0));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlV2lraVBhZ2VTdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGVXaWtpUGFnZVN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBCQUE2QztBQUM3QywyREFBMEQ7QUFFN0MsUUFBQSxvQkFBb0IsR0FBRyxDQUFDLEdBQWEsRUFBRSxLQUFlO0lBQ2pFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUNYLGtDQUFhLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUN6QyxDQUFDLElBQUksQ0FDRixpQkFBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBRSxDQUM1QyxDQUFDO0FBQ0osQ0FBQyxDQUFBIn0=