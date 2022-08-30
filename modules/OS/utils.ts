import { ContributionIcon } from "../../interface";
import { VscIssues, VscGitPullRequest } from "react-icons/vsc";
import { HiOutlineCheckCircle } from "react-icons/hi";

export const Icon = {
  issue: {
    completed: HiOutlineCheckCircle,
    not_planned: HiOutlineCheckCircle,
  },
  pr: VscGitPullRequest,
};

export const displayIcon = (
  type: string,
  status: keyof (keyof ContributionIcon)
) => {
  if (type === "issue") return Icon[type][status] || VscIssues;

  return Icon[type as keyof (keyof ContributionIcon)];
};
