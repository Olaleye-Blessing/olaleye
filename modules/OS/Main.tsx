import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { Contribution, Request } from "../../interface";
import { getContributions } from "../../services/github";
import Contributions from "./Contributions";
import Form from "./Form";
import { StyledMain } from "./Styles/StyledMain";

interface Github {
  page: number;
  perPage: number;
  type: string;
}

interface Contributions extends Github, Request<Contribution[]> {
  total_count: number;
}

const Main: FC = () => {
  const [contributions, setContributions] = useState<Contributions>({
    loading: true,
    data: [],
    error: "",
    page: 1,
    perPage: 20,
    type: "issue",
    total_count: 0,
  });

  const loadContributions = async () => {
    try {
      setContributions((prev) => ({ ...prev, loading: true }));

      const { items: data, total_count } = await getContributions(
        contributions.type,
        contributions.perPage,
        contributions.page
      );

      setContributions((prev) => ({
        ...prev,
        data: [...prev.data, ...data],
        total_count,
      }));
    } catch (error: any) {
      setContributions((prev) => ({ ...prev, error: error.message }));
    } finally {
      setContributions((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    setContributions((prev) => ({ ...prev, page: 1, data: [] }));
    loadContributions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributions.type, contributions.perPage]);

  useEffect(() => {
    if (contributions.page > 1) {
      loadContributions();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributions.page]);

  return (
    <StyledMain className="container">
      <header
        style={{
          position: "sticky",
          top: "6rem",
          padding: "1rem 0rem",
          backgroundColor: "rgba(14,20,27,0.8)",
        }}
      >
        <Form
          type={contributions.type}
          perPage={contributions.perPage}
          onChange={(e) =>
            setContributions((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      </header>
      <section>
        {contributions.data.length > 0 ? (
          <Contributions
            type={contributions.type}
            contributions={contributions.data}
          />
        ) : !contributions.loading ? (
          <h2>No contributions found</h2>
        ) : null}
        {contributions.loading ? (
          <p className="contributions__loading">Loading...</p>
        ) : contributions.error ? (
          <p className="contributions__error">{contributions.error}</p>
        ) : null}
        {contributions.data.length > 0 &&
          contributions.data.length < contributions.total_count && (
            <Button
              text="Load more"
              onClick={() =>
                setContributions((prev) => ({ ...prev, page: prev.page + 1 }))
              }
              disabled={contributions.loading}
              className="load-more"
            />
          )}
      </section>
    </StyledMain>
  );
};

export default Main;
