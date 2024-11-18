\`\`\`markdown
# Astana IT University Admission Website

This is a web project for the admission process of Astana IT University. The project contains several pages that guide prospective students through registration, available programs, and other essential information for applying to the university.

## Project Structure

The project consists of the following files:

### HTML Files

- **index.html**: The main landing page for Astana IT University. It provides an overview of the university, admission procedures, and links to other sections such as programs, tuition fees, and important dates.
- **programs-page.html**: Contains detailed information about the various programs offered at Astana IT University. The page includes filters that allow users to categorize programs based on disciplines.
- **reg.html**: This is the registration page where prospective students can sign up for an account. It contains fields for email, password, and password confirmation.
- **SE_page.html**: Provides details about the Software Engineering program, including relevant information on the courses and skills taught.

### CSS Files

- **index_style.css**: The primary stylesheet for the project. It defines the layout, styling, and appearance of elements across the various pages, including headers, footers, buttons, and sections. It also includes styles for both light and dark themes.

### JavaScript Files

- **logIn.js**: Manages the login and logout functionality. It uses `localStorage` to store login state, and changes the visibility of login/logout buttons based on whether the user is logged in.
- **registration.js**: Contains the logic for the registration form validation. It verifies user inputs, such as ensuring that the email format is correct and that the passwords match before saving