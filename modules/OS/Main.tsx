import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Contribution, Request } from "../../interface";
import { getContributions } from "../../services/github";
import Contributions from "./Contributions";
import Form from "./Form";

interface Github {
  page: number;
  perPage: number;
  type: string;
}

interface Contributions extends Github, Request<Contribution[]> {}

const Main: FC = () => {
  const [contributions, setContributions] = useState<Contributions>({
    loading: true,
    data: [],
    error: "",
    page: 1,
    perPage: 20,
    type: "issue",
  });

  const loadContributions = async () => {
    try {
      setContributions((prev) => ({ ...prev, loading: true }));

      const data = await getContributions(
        contributions.type,
        contributions.perPage,
        contributions.page
      );

      setContributions((prev) => ({ ...prev, data }));
    } catch (error: any) {
      setContributions((prev) => ({ ...prev, error: error.message }));
    } finally {
      setContributions((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    loadContributions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contributions.type, contributions.perPage]);

  return (
    <main className="container">
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
        {contributions.loading ? (
          <p>Loading...</p>
        ) : contributions.error ? (
          <p>{contributions.error}</p>
        ) : (
          <Contributions
            type={contributions.type}
            contributions={contributions.data}
          />
        )}
      </section>
    </main>
  );
};

export default Main;
