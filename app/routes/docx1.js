const docx = require("docx");
// const express = require("@runkit/runkit/express-endpoint");
// const app = express(exports);
const fs = require("fs");
const request = require("request");

const {
  Document,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  ImageRun,
  Media,
  Packer,
  Paragraph,
  VerticalPositionAlign,
  VerticalPositionRelativeFrom,
} = docx;

// https://stackoverflow.com/questions/12740659/downloading-images-with-node-js
const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

const URL = "https://t1.daumcdn.net/cfile/tistory/99A8144E5BECBCEA04";

module.exports = (app) => {
  app.get("/api/docx1", (req, res) => {
    download(URL, "cat.jpg", async () => {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph("Hello World"),
              // new Paragraph({
              //   children: [
              //     new ImageRun({
              //       data: fs.readFileSync("./cat.jpg"),
              //       transformation: {
              //         width: 100,
              //         height: 100,
              //       },
              //     }),
              //   ],
              // }),
              new Paragraph({
                children: [
                  new ImageRun({
                    data: fs.readFileSync("./cat.jpg"),
                    transformation: {
                      width: 500,
                      height: 700,
                    },
                    floating: {
                      horizontalPosition: {
                        offset: 1014400,
                      },
                      verticalPosition: {
                        offset: 1014400,
                      },
                    },
                  }),
                ],
              }),
              // new Paragraph({
              //   children: [
              //     new ImageRun({
              //       data: fs.readFileSync("./cat.jpg"),
              //       transformation: {
              //         width: 200,
              //         height: 200,
              //       },
              //       floating: {
              //         horizontalPosition: {
              //           relative: HorizontalPositionRelativeFrom.PAGE,
              //           align: HorizontalPositionAlign.RIGHT,
              //         },
              //         verticalPosition: {
              //           relative: VerticalPositionRelativeFrom.PAGE,
              //           align: VerticalPositionAlign.BOTTOM,
              //         },
              //       },
              //     }),
              //   ],
              // }),
            ],
          },
        ],
      });

      const b64string = await Packer.toBase64String(doc);

      res.setHeader("Content-Disposition", "attachment; filename=holiday.docx");
      res.send(Buffer.from(b64string, "base64"));
    });
  });
};
