import { GitHubIssue, GitHubLabel } from "./directory";

/**
 * Returns issue by label
 * @param searchIssues issues array
 * @param searchLabel label string
 */

export function getIssueByLabel(searchIssues: GitHubIssue[], searchLabel: string) {
  searchIssues = searchIssues.filter((issue) => {
    const labels = (issue.labels as GitHubLabel[]).filter((obj) => obj.name === searchLabel);
    return labels.length > 0;
  });
  return searchIssues.length > 0 ? searchIssues[0] : null;
}
