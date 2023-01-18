/**
 * server-side function to serve an HTML service
 * @customFunction
 * doGet()
 * @returns {HTMLOutputElement}
 */
function doGet() {
  const user_email = getActiveUser();
  const user_details = getUserAccess();

  var htmlFile = "403";
  if (user_details.type && user_details.type != "denied") {
    htmlFile = "index";
  }
  const htmlTemplate = HtmlService.createTemplateFromFile(htmlFile);

  htmlTemplate.user_email = user_email ? user_email : "";
  htmlTemplate.user_type = user_details.type ? user_details.type : "visitor";
  htmlTemplate.user_name = user_details.name ? user_details.name : "Not Known";
  htmlTemplate.user_roll = user_details.roll ? user_details.roll : "Not Known";
  htmlTemplate.user_tut = user_details.tut ? user_details.tut : "Not Known";
  htmlTemplate.user_div = user_details.div ? user_details.div : "Not Known";

  console.log({
    work: "Access Requested",
    email: user_email,
    html: htmlFile,
    details: user_details,
  });

  return htmlTemplate
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
    .setFaviconUrl("https://cdn-icons-png.flaticon.com/512/2228/2228722.png")
    .setTitle("Show My Grade");
}
