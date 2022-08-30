import { FC } from "react";
import { Contribution, ContributionIcon } from "../../interface";
import { displayIcon } from "./utils";
import { IconType } from "react-icons";
import { StyledContributions } from "./Styles/StyledContribution";

const Contributions: FC<{ contributions: Contribution[]; type: string }> = ({
  contributions,
  type,
}) => {
  return (
    <StyledContributions>
      {contributions.map((contribution) => {
        let { state_reason, state } = contribution;
        let Icon = displayIcon(
          type,
          state_reason as keyof (keyof ContributionIcon)
        ) as unknown as IconType;

        return (
          <li key={contribution.html_url}>
            <figure
              className={`flex ${type} ${state_reason}`}
              aria-hidden="true"
            >
              {<Icon className={`${state_reason || state || "completed"}`} />}
            </figure>
            <a href={contribution.html_url} target="_blank" rel="noreferrer">
              {contribution.title}{" "}
            </a>
            {type === "issue" && (
              <span
                className={`reason ${state_reason || state}`}
                aria-label="status"
              >
                {state_reason?.split("_").join(" ") || "open"}
              </span>
            )}
          </li>
        );
      })}
    </StyledContributions>
  );
};

export default Contributions;
