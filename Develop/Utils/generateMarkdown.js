// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Description

  ${data.description}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  * If you would like to contact me to contribute, please email me at ${data.email}.

  ## Tests 

  ${data.test}

  ## License

  Licensed with ${data.license} license.

  * Check out my other projects at https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;