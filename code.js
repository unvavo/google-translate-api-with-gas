function doGet(e) {
  // Get request params
  const p = e.parameter;

  // Execute translate
  const translatedText = LanguageApp.translate(p.text, p.source, p.target);

  // Create body
  let body;
  if (translatedText) {
    body = {
      code: 200,
      text: translatedText
    };
  } else {
    body = {
      code: 400,
      text: "Bad Request"
    };
  }

  // Create response
  const response = ContentService.createTextOutput();
  response.setMimeType(ContentService.MimeType.JSON);
  response.setContent(JSON.stringify(body));

  return response;
}
