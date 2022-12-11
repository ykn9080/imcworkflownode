const docx = require("docx");
// const express = require("@runkit/runkit/express-endpoint");
// const app = express(exports);

const { Document, Packer, Paragraph, TextRun } = docx;

module.exports = (app) => {
  app.get("/api/docx", async (req, res) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Hello World"),
                new TextRun({
                  text: "Foo Bar",
                  bold: true,
                }),
                new TextRun({
                  text: "\tGithub is the best",
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const b64string = await Packer.toBase64String(doc);

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=My Document.docx"
    );
    res.send(Buffer.from(b64string, "base64"));
  });
};
