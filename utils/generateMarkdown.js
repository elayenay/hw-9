function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${
    data.license
  }-yellow.svg)](https://opensource.org/licenses/${data.license})

  ### Table of Contents 
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contribution)
  6. [Tests](#tests)
  7. [Questions](#questions)
  8. [Contact](#contact)

  ### Description
  * ${data.description}
  ### Installation
  * ${data.installation}
  ### Usage
  * ${data.usage}
  ### License
  * ${data.license.join(" ")}
  ### Contributing
  * ${data.contribution}
  ### Tests
  * ${data.tests}
  ### Questions
  * ${data.questions}
  ### Contact
  * Github: https://github.com/${data.github}
  * Email: ${data.email}
`;
}
module.exports = generateMarkdown;
