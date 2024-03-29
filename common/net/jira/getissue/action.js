const axios = require('axios');

class JiraGetIssueAction {
  constructor (jiraBaseUrl, jiraIssue, jiraToken) {
    this.baseUrl = jiraBaseUrl;
    this.issue = jiraIssue;
    this.token = jiraToken;
  }

  async execute () {
    console.log(`Issue to search jira for: ${this.issue}`)
    let config = {
      headers: {
          'Authorization': `Basic ${this.token}`,
      }
    }

    try {
      const response = await axios.get(`${this.baseUrl}/rest/api/3/issue/${this.issue}`, config);
      console.log(`Got for ${this.issue}: ${response.status}`)
      return response.data;
    } catch (error) {
      console.log(`Got an error while getting ${this.issue}: ${error.message}`)
      return null
    }
  }
}

module.exports = JiraGetIssueAction;
