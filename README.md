Index Page (index.html)
Purpose:
The index page serves as the landing page for my personal website. It introduces the user to me and provides navigation links to other sections of the site including "About Me," "My Resume," and "Contact Me." Additionally, the page features a personal photo of me.

Structure and Content:
Header:
Contains the main heading of the website and a navigation section. The navigation section includes a list of links to other HTML pages in the website: aboutme.html, myresume.html, and contactme.html, which open in new tabs. There's also a link to my LinkedIn profile, accompanied by the LinkedIn logo (images/linkedinlogo.jpg).

Main Content:
The first section welcomes visitors and includes a personal photo (images/Lucas.jpeg) of me in graduation attire.
Footer:
Contains a thank-you note for users.
Relative Paths:
Images: images/indexfavicon.png, images/linkedinlogo.jpg, images/Lucas.jpeg
Other Pages: aboutme.html, myresume.html, contactme.html
About Me Page (aboutme.html)
Purpose:
The "About Me" page provides visitors with a detailed introduction of me, highlighting my academic background, passions, and aspirations within the field of Computer Science. It also encourages networking by inviting students, tech enthusiasts, industry experts, and others interested in technology to engage with me.

Structure and Content:
Header:
Features the page's main title and a navigation section. The navigation includes links to return to the homepage (index.html), view the resume (myresume.html), and contact me (contactme.html), with a nested list item for my LinkedIn profile.

Main Content:
An article containing a personal introduction, emphasizing my academic achievements, passion for technology, and eagerness to contribute to the tech community.
Relative Paths:
Icon: images/aboutfavicon.png
Other Pages: index.html, myresume.html, contactme.html
My Resume Page (myresume.html)
Purpose:
The "My Resume" page allows visitors to view and download my professional resume. This page is designed to provide easy access to my qualifications, experiences, and skills in a downloadable PDF format, thereby facilitating potential employers interested in my professional background.

Structure and Content:
Header:
Contains the page title and a navigation section. The navigation bar offers links to return to the homepage (index.html), view the resume page again (myresume.html), and contact me (contactme.html), including a nested link to my LinkedIn profile.

Main Content:
Provides a direct link for visitors to download my resume (documents/lucasreydmanresume.pdf) as a PDF file. This feature is highlighted with a strong call to action, inviting users to "CLICK HERE" for the download.
Includes an embedded PDF viewer that displays my resume directly on the page, allowing visitors to view the document without downloading it.
Footer:
Encourages users to download a copy of the resume by reminding them of the link at the top of the page.
Relative Paths:
Icon: images/resumefavicon.png
Resume Document: documents/lucasreydmanresume.pdf
Other Pages: index.html, contactme.html
Contact Me Page (contactme.html)
Purpose:
The "Contact Me" page is designed to provide various methods for visitors to get in touch with me. It outlines different communication channels, including email, Discord, and Instagram, making it easy for potential employers and collaborators to reach out. Additionally, the page allows visitors to contact me directly through a form.

Structure and Content:
Header:
Displays the page title and includes a navigation section with links back to the homepage (index.html), the resume page (myresume.html), and a nested link to my LinkedIn profile within the "Contact Me" list item.

Main Content:
A section presenting a table that lists my contact methods ("Email," "Discord," "Instagram") along with the corresponding details. The email address and Instagram profile are provided as clickable links, facilitating direct contact.
Another section allowing visitors to contact me directly through a form, enhancing the page's interactivity and visitor engagement.
Footer:
Encourages visitors to reach out and expresses openness to discussing opportunities.
Relative Paths:
Icon: images/contactfavicon.png
Other Pages: index.html, myresume.html
Stylesheet (styles.css)
The document explains the design choices and structure of the styles.css file, which provides styling for my personal website. The stylesheet aims for a professional and clean look, with an intuitive user interface. Specific styles are implemented for navigation, typography, layout classes, element-specific styles, and multimedia elements to create a cohesive and visually appealing experience for the user.

Box Model and Base Styles:
The universal selector (*) is used to set box-sizing: border-box, ensuring that padding and borders do not affect the overall width and height of elements. Margins and padding are reset to 0, providing a clean slate for custom styling and consistent layouts.

Typography:
Arial is selected as the base font for its readability and wide availability, while headings are styled with Trebuchet MS to add character without sacrificing professionalism. The line-height property is set to 2 to enhance readability across the site.

Navigation Bar:
The navigation bar utilizes Flexbox for a responsive and adaptable layout, with a lightblue background to distinguish it from the rest of the page content. Navigation links are blueviolet for visual interest, turning red upon hover to provide immediate user feedback.

Hover Effects:
Navigation links implement an underline effect using the ::after pseudo-element, which transitions in width on hover, adding a touch of sophistication and modernity to the navigation experience.

Layout Classes:
The .main-flex and .main-grid classes employ flex and grid layout models, respectively, to create responsive designs that maintain their structure across different screen sizes. .main-grid is particularly useful in organizing the layout of the "About Me" and "Contact Me" pages, balancing text with interactive media.

Element Specific Styles:
The img selector ensures all images on the site are uniformly styled with a blueviolet border, consistent with the navigation text color. Tables receive simple borders and padding to maintain legibility and structure.

Footer:
Footer text is centered and colored green for clear visibility, providing a complementary contrast to the rest of the site's design.

Multimedia Elements:
Videos and interactive elements are outlined with a red border to highlight them as key components of the site.

JavaScript (script.js)
The JavaScript file enhances the site's interactivity and usability with several features:

Welcome Notification on Index Page:
A welcome message greets visitors upon their arrival at the homepage, providing a warm and personal introduction to the site. This feature is activated only on the index page to ensure the greeting is exclusive to first-time visitors.

Color Scheme Toggler:
A color scheme toggler is implemented to enhance accessibility and personalization, allowing visitors to switch between default, dark, and light modes according to their preference. This feature dynamically changes the site's appearance by toggling the body's class to match the selected theme.

Form Validation for Contact Me:
To ensure data integrity and enhance user interaction, a validation function checks the completeness and format of all fields in the 'Contact Me' form. Incorrect submissions prompt an alert, guiding users to correct their input before successful submission.

ACM CITATIONS:

HeartSnappedGaming. 2018. Code Flythough Loop | 4K | Free Stock Videos. YouTube. [video]. Available: https://www.youtube.com/watch?v=l04-YCc8wTk. Accessed: 2024, February 6.

VideoGallery-NoCopyrightFootage. 2022. email address mail letter icon Free Video | Free Stock Footage | No Copyright Videos. YouTube. [video]. Available: https://www.youtube.com/watch?v=VqA8dDuo2u0. Accessed: 2024, February 6.

TheRAREGROOVEMAN. 2014. ERYKAH BADU - DIDN'T CHA KNOW. YouTube. [video]. Available: https://www.youtube.com/watch?v=Rte5N6mF9ic. Accessed: 2024, February 6.

eDigital. 2024. The New LinkedIn Logo PNG in 2024. [image]. Available: https://www.edigitalagency.com.au/linkedin/new-linkedin-logo-png/. Accessed: 2024, February 7.

Flaticon. 2024. Favicon Icons & Symbols. [image]. Available: https://www.flaticon.com/free-icons/favicon. Accessed: 2024, February 5.

Flaticon. 2024. About Icon. [image]. Available: https://www.flaticon.com/free-icons/favicon. Accessed: 2024, February 5.

Flaticon. 2024. Resume Icon. [image]. Available: https://www.flaticon.com/free-icons/favicon. Accessed: 2024, February 5.

Flaticon. 2024. Contact Icon. [image]. Available: https://www.flaticon.com/free-icons/favicon. Accessed: 2024, February 5.

OpenAI. 2023. "ChatGPT." Accessed [March 2024]. https://openai.com/chatgpt.

CREATED BY STUDENT (LUCAS REYDMAN B00958845):

images/Lucas.jpeg

documents/lucasreydmanresume
